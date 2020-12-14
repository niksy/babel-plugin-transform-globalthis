const GLOBAL_THIS = 'globalThis';

const globalThisCodeString = `
var GLOBAL_THIS = (function (Object) {
  function get() {
    var _global = this || self;
    delete Object.prototype.__magic__;
    return _global;
  }
  if (typeof globalThis === "object") {
    return globalThis;
  }
  if (this) {
    return get();
  } else {
    Object.defineProperty(Object.prototype, "__magic__", {
      configurable: true,
      get: get,
    });
    var _global = __magic__;
    return _global;
  }
})(Object);
`;

export default ({ types: t, template }) => {
	return {
		visitor: {
			Program: {
				enter(path, { file }) {
					file.set(GLOBAL_THIS, false);
				},
				exit(path, { file, opts }) {
					const globalThisId = file.get(GLOBAL_THIS);
					if (
						!globalThisId &&
						!path.scope.hasBinding(globalThisId.name)
					) {
						return;
					}
					const object = template(globalThisCodeString)({
						GLOBAL_THIS: globalThisId
					});
					path.node.body.unshift(object);
				}
			},
			Identifier(path, { file }) {
				if (path.node.name !== GLOBAL_THIS) {
					return;
				}
				const memberExpression = path.findParent((path) =>
					path.isMemberExpression()
				);
				if (
					(memberExpression &&
						memberExpression.get('object') === path) ||
					!memberExpression
				) {
					if (!file.get(GLOBAL_THIS)) {
						file.set(
							GLOBAL_THIS,
							path.scope.generateUidIdentifier(GLOBAL_THIS)
						);
					}
					path.replaceWith(file.get(GLOBAL_THIS));
				}
			}
		}
	};
};
