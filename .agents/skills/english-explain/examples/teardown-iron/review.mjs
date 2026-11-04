#!/usr/bin/env node
// Zero-npm-dependency review, reusing english-explain's figure-craft CDP transport.
import assert from 'node:assert/strict';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {openBrowser, sleep} from '../../scripts/browser.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const target = path.resolve(process.argv[2] || path.join(HERE, 'demo.html'));
const out = path.resolve(process.argv[4] || path.join(HERE, '../../../../tmp/teardown-iron-review'));
const browser = await openBrowser({width: 1600, height: 1000});
try {
  await browser.call('Network.emulateNetworkConditions', {offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0});
  await browser.goto(`${pathToFileURL(target).href}?capture`);
  await browser.waitFor('window.LESSON && window.SIM?.ready');
  await browser.evaluate('window.SIM.render(7)');
  await browser.evaluate('document.querySelector(\'.sentence button[data-word="heat maker"]\').click()');
  assert.equal(await browser.evaluate('window.LESSON.selected'), 'heat-maker');
  console.log('PASS word → part');
  await browser.screenshot(path.join(out, 'word-to-part.png'));

  await browser.evaluate('window.LESSON.selectPart(\'power-wire\')');
  await browser.evaluate('window.SIM.render(31)');
  await browser.clickAt(811, 305);
  await sleep(250);
  assert.equal(await browser.evaluate('window.LESSON.selected'), 'hand-holder');
  await browser.evaluate('window.SIM.render(31)');
  console.log('PASS real 3D raycast → word/explanation');
  await browser.screenshot(path.join(out, 'part-to-word.png'));

  await browser.evaluate('document.querySelector(\'.takeover\').click()');
  await browser.evaluate('window.SIM.render(0)');
  await browser.evaluate('window.SIM.render(7)');
  assert.equal(await browser.evaluate('window.LESSON.selected'), 'heat-maker');
  assert.match(await browser.evaluate('document.querySelector(\'.takeover\').textContent'), /YOUR TURN/);
  console.log('PASS auto tour resumes and advances from tour data');
  assert.deepEqual(browser.errors, []);
  assert.deepEqual(browser.networkFailures, []);
  console.log('PASS offline file:// and zero browser errors');
} finally {
  await browser.close();
}
