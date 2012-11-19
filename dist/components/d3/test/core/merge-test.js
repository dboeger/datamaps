require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.merge");suite.addBatch({merge:{"merges an array of arrays":function(){var e={},t={},n={},r={},i={},s={};assert.deepEqual(d3.merge([[e],[t,n],[r,i,s]]),[e,t,n,r,i,s])},"returns a new array":function(){var e=[[1,2,3],[4,5],[6]];assert.isFalse(d3.merge(e)===e)},"does not modify the input arrays":function(){var e=[[1,2,3],[4,5],[6]];d3.merge(e),assert.deepEqual(e,[[1,2,3],[4,5],[6]])}}}),suite.export(module)