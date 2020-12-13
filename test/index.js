import assert from 'assert';
import { promises as fs } from 'fs';
import { transformFileAsync } from '@babel/core';
import function_ from '../index';

async function runTest(testCase, options = {}) {
	const [expected, actual] = await Promise.all([
		fs.readFile(`./test/fixtures/${testCase}.expected.js`, 'utf8'),
		transformFileAsync(`./test/fixtures/${testCase}.js`, {
			plugins: [[function_, options]]
		})
	]);
	assert.equal(actual.code.trim(), expected.trim());
}

it('should transform `globalThis`', function () {
	return runTest('input');
});
