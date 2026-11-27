const test=require('node:test');const assert=require('node:assert/strict');const {validate,filterReports,metrics,resolveReport}=require('../src/domain');
const valid={category:'Ausência de rampa',level:'Alta',location:'Rua Central',description:'Sem rampa na travessia'};
test('aceita ocorrência válida',()=>assert.equal(validate(valid),null));
test('rejeita categoria inválida',()=>assert.ok(validate({...valid,category:''})));test('rejeita descrição curta',()=>assert.ok(validate({...valid,description:'abc'})));test('rejeita localização vazia',()=>assert.ok(validate({...valid,location:'   '})));test('rejeita gravidade inválida',()=>assert.ok(validate({...valid,level:'x'})));
const rows=[{id:'1',category:valid.category,status:'Registrada'},{id:'2',category:'Outro',status:'Resolvida'}];
test('combina filtros',()=>assert.deepEqual(filterReports(rows,valid.category,'Registrada'),[rows[0]]));test('calcula indicadores',()=>assert.deepEqual(metrics(rows),{total:2,open:1,resolved:1}));test('resolve sem mutar dados',()=>{const next=resolveReport(rows,'1');assert.equal(next[0].status,'Resolvida');assert.equal(rows[0].status,'Registrada');assert.equal(next[1],rows[1])});
