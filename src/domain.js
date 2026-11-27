const categories = ['Calçada danificada','Ausência de rampa','Obstáculo na via','Sinalização inadequada','Outro'];
const levels = ['Baixa','Média','Alta'];
function validate(d){if(!categories.includes(d.category)) return 'Selecione uma categoria.'; if(!levels.includes(d.level)) return 'Selecione a gravidade.'; if(d.location.trim().length<5 || d.location.length>120) return 'Informe uma localização entre 5 e 120 caracteres.'; if(d.description.trim().length<10 || d.description.length>300) return 'Descreva o problema entre 10 e 300 caracteres.'; return null;}
function filterReports(reports, category, status){return reports.filter(r=>(category==='Todas'||r.category===category)&&(status==='Todas'||r.status===status));}
function metrics(reports){return {total:reports.length,open:reports.filter(r=>r.status==='Registrada').length,resolved:reports.filter(r=>r.status==='Resolvida').length};}
function resolveReport(reports,id){return reports.map(r=>r.id===id?{...r,status:'Resolvida'}:r);}
module.exports={categories,levels,validate,filterReports,metrics,resolveReport};
