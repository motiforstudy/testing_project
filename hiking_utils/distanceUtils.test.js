import { kmToMeters } from "./distanceUtils.js";
import test from "node:test";
import assert from "node:assert/strict";

test("is number negative throw error in kmToMetrs?:", ()=>{assert.throws(()=>{kmToMeters(-2)})});
test("is kmToMetrs working?:", ()=> {assert.strictEqual(kmToMeters(2), 2000)});
test("is number equal zero throw error in kmToMetrs", ()=> {assert.throws(()=>{kmToMeters(0)})});