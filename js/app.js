const PAY = { iban: '004000009141212110121', titular: 'Felisberto Aurélio Machado Sambambi', unitel: '944 576 596', preco: '100 Kz' };
const KEY = 'cvangola_v1', $ = s => document.querySelector(s);
const SUG = {
  'Técnico de Informática': ['Instalação e manutenção de computadores', 'Suporte técnico a utilizadores', 'Configuração de redes', 'Instalação de software'],
  'Assistente Administrativo': ['Organização e arquivo de documentos', 'Atendimento telefónico e presencial', 'Gestão de correspondência', 'Elaboração de relatórios'],
  'Contabilista': ['Lançamentos contabilísticos', 'Elaboração de balancetes', 'Apoio em declarações fiscais'], 'Professor': ['Planificação e leccionação de aulas', 'Avaliação de alunos', 'Acompanhamento pedagógico'],
  'Enfermeiro': ['Prestação de cuidados de enfermagem', 'Administração de medicação', 'Registo clínico de pacientes'], 'Técnico de Recursos Humanos': ['Recrutamento e selecção', 'Processamento de salários', 'Gestão de processos individuais'],
  'Motorista': ['Condução de viaturas ligeiras/pesadas', 'Manutenção básica da viatura', 'Cumprimento de rotas e horários'], 'Electricista': ['Instalações eléctricas', 'Manutenção preventiva e correctiva', 'Leitura de esquemas'],
  'Técnico de Construção Civil': ['Acompanhamento de obras', 'Leitura de projectos', 'Controlo de materiais'], 'Vendedor': ['Atendimento e prospecção de clientes', 'Cumprimento de metas de vendas', 'Controlo de stock'],
  'Recepcionista': ['Recepção de visitantes', 'Atendimento telefónico', 'Gestão de agenda'], 'Secretário': ['Gestão de agenda', 'Redacção de documentos', 'Organização de reuniões'],
  'Designer': ['Criação de peças gráficas', 'Identidade visual', 'Edição de imagem'], 'Programador': ['Desenvolvimento de aplicações web', 'Manutenção de sistemas', 'Gestão de código com Git'],
  'Técnico de Contabilidade': ['Registo de operações', 'Conciliações bancárias', 'Arquivo contabilístico'],
  'Gestor': ['Gestão de equipas', 'Planeamento e controlo de resultados', 'Elaboração de relatórios de gestão'], 'Marketing': ['Gestão de redes sociais', 'Criação de campanhas', 'Análise de resultados'],
  'Segurança': ['Controlo de acessos', 'Rondas de vigilância', 'Elaboração de relatórios de ocorrência'], 'Mecânico': ['Diagnóstico de avarias', 'Manutenção preventiva', 'Reparação de motores']
};
const PRESET_T = ['Microsoft Word', 'Excel', 'PowerPoint', 'HTML', 'CSS', 'JavaScript', 'Contabilidade', 'Marketing'], PRESET_P = ['Comunicação', 'Liderança', 'Trabalho em equipa', 'Organização', 'Criatividade', 'Gestão de tempo', 'Resolução de problemas'];
const LV = ['', 'Básico', 'Intermédio', 'Avançado'];
const TPL = [['t1', 'Executivo', 'Formal e elegante', 'Gestores e profissionais experientes'], ['t2', 'Moderno', 'Contemporâneo', 'Jovens profissionais'], ['t3', 'Clássico', 'Tradicional', 'Bancos e instituições'],
['t4', 'Minimalista', 'Muito limpo', 'Qualquer área'], ['t5', 'Profissional com Foto', 'Destaque para a fotografia', 'Candidaturas com foto'], ['t6', 'Criativo', 'Visual e marcante', 'Design, marketing, comunicação']];
const L = {
  exp: { n: 'Experiência', f: [['empresa', 'Empresa'], ['cargo', 'Cargo'], ['dep', 'Departamento'], ['local', 'Localização'], ['tipo', 'Tipo de trabalho', 'sel', 'Tempo inteiro,Part-time,Estágio,Freelancer,Voluntário'], ['inicio', 'Início', 'month'], ['fim', 'Término', 'month'], ['actual', 'Trabalho actual', 'chk'], ['desc', 'Responsabilidades e realizações (uma por linha)', 'area']] },
  edu: { n: 'Formação', f: [['inst', 'Instituição'], ['curso', 'Curso'], ['grau', 'Grau', 'sel', 'Ensino Médio,Curso técnico,Formação profissional,Bacharelato,Licenciatura,Pós-graduação,Mestrado,Doutoramento'], ['local', 'Localização'], ['inicio', 'Início', 'month'], ['fim', 'Conclusão', 'month'], ['actual', 'Em curso', 'chk'], ['desc', 'Descrição', 'area']] },
  lang: { n: 'Idioma', f: [['n', 'Idioma'], ['l', 'Nível', 'sel', 'Básico,Intermédio,Avançado,Fluente,Nativo']] },
  cert: { n: 'Curso/Certificação', f: [['n', 'Curso ou certificação'], ['inst', 'Instituição'], ['data', 'Data', 'month'], ['cod', 'Código (opcional)'], ['desc', 'Descrição', 'area']] },
  proj: { n: 'Projecto', f: [['n', 'Nome do projecto'], ['func', 'Função'], ['tec', 'Tecnologias'], ['link', 'Link'], ['data', 'Data', 'month'], ['desc', 'Descrição', 'area']] },
  ach: { n: 'Realização', f: [['n', 'Realização'], ['desc', 'Descrição', 'area']] },
  vol: { n: 'Voluntariado', f: [['n', 'Organização'], ['func', 'Função'], ['data', 'Período'], ['desc', 'Descrição', 'area']] },
  ref: { n: 'Referência', f: [['n', 'Nome'], ['cargo', 'Cargo'], ['org', 'Organização'], ['tel', 'Telefone'], ['email', 'Email']] }
};
const P = [['nome', 'Nome completo', 1], ['prof', 'Nome profissional'], ['nasc', 'Data de nascimento', 'date'], ['sexo', 'Sexo', 'sel', 'Masculino,Feminino'], ['nac', 'Nacionalidade'], ['civil', 'Estado civil', 'sel', 'Solteiro(a),Casado(a),União de facto,Divorciado(a),Viúvo(a)'], ['prov', 'Província'], ['mun', 'Município'], ['bairro', 'Bairro'], ['tel', 'Telefone', 1], ['whats', 'WhatsApp'], ['email', 'Email', 1], ['morada', 'Morada'], ['linkedin', 'LinkedIn'], ['site', 'Website/Portfólio'], ['github', 'GitHub']];
const STEPS = [{ t: 'Informações pessoais', k: 'p', tip: 'Preencha pelo menos nome, telefone e email. A idade é calculada pela data de nascimento.' },
{ t: 'Perfil profissional', k: 'perfil', tip: 'Escreva um resumo de 3 a 5 linhas sobre a sua experiência e principais competências.' },
{ t: 'Experiência profissional', k: 'exp', tip: 'Descreva as principais responsabilidades e resultados alcançados em cada função. Sem experiência? Adicione projectos, voluntariado e cursos.' },
{ t: 'Formação académica', k: 'edu', tip: 'Comece pela formação mais recente.' }, { t: 'Competências', k: 'sk', tip: 'Adicione competências relacionadas com a vaga que pretende ocupar.' },
{ t: 'Idiomas', k: 'lang', tip: 'Indique o nível real de cada idioma.' }, { t: 'Cursos e certificações', k: 'cert', tip: 'Cursos e certificados reforçam a sua candidatura.' },
{ t: 'Projectos e realizações', k: 'proj,ach', tip: 'Importante para programadores, designers, engenheiros e estudantes.' }, { t: 'Informações adicionais', k: 'extra,vol', tip: 'Tudo aqui é opcional.' },
{ t: 'Referências', k: 'ref', tip: 'Pode indicar que as referências estão disponíveis mediante solicitação.' }, { t: 'Escolha e personalização do modelo', k: 'tpl', tip: 'Escolha um modelo e ajuste as cores.' },
{ t: 'Pré-visualização', k: 'review', tip: 'Confirme se está tudo correcto antes de pagar.' }, { t: 'Pagamento', k: 'pay', tip: '' }, { t: 'Desbloqueio e PDF', k: 'done', tip: '' }];
const blank = () => ({
  step: 0, tpl: 't2', cor: '#0b3d6e', cor2: '#e8a317', fs: 13, foto: '', showFoto: true, fotoEst: 'round', p: {}, perfil: { cargo: '', titulo: '', resumo: '' },
  exp: [{}], edu: [{}], lang: [{}], cert: [], proj: [], ach: [], vol: [], ref: [], skT: [], skP: [], extra: {}, refReq: false, pago: false, pay: {}
});
let s = load() || blank();
function load() { try { return JSON.parse(localStorage.getItem(KEY)) } catch (e) { return null } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(s)) } catch (e) { alert('Memória do navegador cheia. Use uma fotografia mais pequena.') } }
const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function fld(l, i, f, v) {
  const [k, lb, ty, op] = f, d = `data-l="${l}" data-i="${i}" data-k="${k}"`; let inp;
  if (ty == 'area') inp = `<textarea ${d}>${esc(v)}</textarea>`; else if (ty == 'chk') return `<label><input type="checkbox" ${d} ${v ? 'checked' : ''}> ${lb}</label>`;
  else if (ty == 'sel') inp = `<select ${d}><option value="">Seleccionar</option>${op.split(',').map(o => `<option ${v == o ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
  else inp = `<input ${d} type="${ty || 'text'}" value="${esc(v)}">`; return `<label>${lb}</label>${inp}`
}
function listUI(k) {
  const c = L[k]; return `<h3>${c.n}</h3>` + s[k].map((it, i) => `<div class="card"><button class="rm" data-rm="${k}" data-i="${i}">Remover</button><b>${c.n} ${i + 1}</b>
 ${k == 'exp' ? `<label>Sugestões <small>(escolha uma profissão e clique numa sugestão)</small></label><select data-sug="${i}"><option value="">Escolher profissão</option>${Object.keys(SUG).map(j => `<option>${j}</option>`).join('')}</select><div id="sg${i}"></div>` : ''}
 <div class="row">${c.f.map(f => fld(k, i, f, it[f[0]])).join('')}</div></div>`).join('') + `<button class="btn ghost" data-add="${k}">+ Adicionar ${c.n.toLowerCase()}</button>`
}
function skUI(k, t, pre) {
  return `<h3>${t}</h3><div>${pre.map(x => `<button class="chip ${s[k].some(y => y.n == x) ? 'on' : ''}" data-sk="${k}" data-n="${esc(x)}">${x}</button>`).join('')}</div>
 <div class="row"><div><label>Outra competência</label><input id="in${k}"></div><div><label>Nível <small>(opcional)</small></label><select id="lv${k}">${LV.map(x => `<option>${x}</option>`).join('')}</select></div></div>
 <button class="btn ghost" data-skadd="${k}">+ Adicionar</button><div>${s[k].map((x, i) => `<span class="chip on" data-skrm="${k}" data-i="${i}">${esc(x.n)}${x.l ? ' — ' + x.l : ''} ✕</span>`).join('')}</div>`
}
function stepUI() {
  const st = STEPS[s.step]; let h = `<h2>${st.t}</h2>` + (st.tip ? `<div class="tip">Dica: ${st.tip}</div>` : '');
  for (const k of st.k.split(',')) {
    if (k == 'p') h += `<div class="card"><label>Fotografia <small>(opcional — JPG, PNG ou WebP)</small></label>${s.foto ? `<img class="ph" src="${s.foto}"><br>` : ''}<input type="file" id="foto" accept=".jpg,.jpeg,.png,.webp">${s.foto ? '<button class="btn ghost" id="rmfoto">Remover fotografia</button>' : ''}
  <label><input type="checkbox" id="showFoto" ${s.showFoto ? 'checked' : ''}> Incluir fotografia no CV</label></div><div class="card"><div class="row">${P.map(f => fld('p', 0, [f[0], f[1] + (f[2] === 1 ? ' <small class="req">(Obrigatório)</small>' : ' <small>(Opcional)</small>'), f[2] === 1 ? '' : f[2], f[3]], s.p[f[0]])).join('')}</div></div>`;
    else if (k == 'perfil') { const x = s.perfil; h += `<div class="card"><label>Cargo/Profissão</label><input data-l="perfil" data-k="cargo" value="${esc(x.cargo)}" placeholder="Ex.: Técnico de Informática"><label>Título profissional</label><input data-l="perfil" data-k="titulo" value="${esc(x.titulo)}" placeholder="Ex.: Desenvolvedor Web | Técnico de Informática"><label>Resumo profissional</label><textarea data-l="perfil" data-k="resumo" placeholder="Profissional de informática com experiência em desenvolvimento web, suporte técnico e gestão de sistemas, com capacidade de trabalhar em equipa.">${esc(x.resumo)}</textarea></div>` }
    else if (k == 'sk') h += skUI('skT', 'Competências técnicas', PRESET_T) + skUI('skP', 'Competências profissionais', PRESET_P);
    else if (k == 'extra') { const e = s.extra; h += `<div class="card"><div class="row">${[['carta', 'Carta de condução'], ['viajar', 'Disponibilidade para viajar', 'sel', 'Sim,Não'], ['imediata', 'Disponibilidade imediata', 'sel', 'Sim,Não'], ['mudar', 'Mudança de cidade', 'sel', 'Sim,Não']].map(f => fld('extra', 0, f, e[f[0]])).join('')}</div>${fld('extra', 0, ['outras', 'Outras informações', 'area'], e.outras)}</div>` }
    else if (k == 'ref') h += `<label><input type="checkbox" id="refReq" ${s.refReq ? 'checked' : ''}> Referências disponíveis mediante solicitação</label>` + (s.refReq ? '' : listUI('ref'));
    else if (k == 'tpl') h += `<div class="tpls">${TPL.map(t => `<div class="tpl ${s.tpl == t[0] ? 'on' : ''}" data-tpl="${t[0]}"><b>${t[1]}</b><br>${t[2]}<br><small>Indicado para: ${t[3]}</small><br><span class="chip">${s.tpl == t[0] ? 'Em uso' : 'Usar este modelo'}</span></div>`).join('')}</div>
  <div class="row"><div><label>Cor principal</label><input type="color" data-g="cor" value="${s.cor}"></div><div><label>Cor secundária</label><input type="color" data-g="cor2" value="${s.cor2}"></div>
  <div><label>Tamanho da letra</label><select data-g="fs">${[12, 13, 14].map(n => `<option value="${n}" ${s.fs == n ? 'selected' : ''}>${n == 12 ? 'Pequena' : n == 13 ? 'Normal' : 'Grande'}</option>`).join('')}</select></div>
  <div><label>Estilo da fotografia</label><select data-g="fotoEst">${[['round', 'Redonda'], ['sq', 'Quadrada'], ['rd', 'Cantos arredondados']].map(o => `<option value="${o[0]}" ${s.fotoEst == o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></div></div>`;
    else if (k == 'review') h += `<div class="card">Reveja o CV ao lado. Se estiver tudo certo, avance para o pagamento.</div>`;
    else if (k == 'pay') h += payUI(); else if (k == 'done') h += doneUI(); else h += listUI(k)
  }
  return h
}
function payUI() {
  const y = s.pay; if (s.pago) return '<div class="card">Pagamento já enviado.</div>';
  return `<div class="card"><b>O seu CV está pronto.</b> Para desbloquear o download em PDF, faça um pagamento único de <b>${PAY.preco}</b>.</div>
 <div class="card"><b>Passo 1 — Escolha o método</b><br><button class="chip ${y.m == 'Transferência bancária' ? 'on' : ''}" data-pm="Transferência bancária">Transferência bancária</button><button class="chip ${y.m == 'Unitel Money' ? 'on' : ''}" data-pm="Unitel Money">Unitel Money</button>
 ${y.m == 'Transferência bancária' ? `<p><b>Titular:</b> ${PAY.titular}<br><b>IBAN:</b> ${PAY.iban}</p>` : ''}${y.m == 'Unitel Money' ? `<p><b>Número:</b> ${PAY.unitel}</p>` : ''}</div>
 <div class="card"><b>Passo 2 — Pague ${PAY.preco}</b><br><b>Passo 3 — Preencha</b><label>Nome utilizado no pagamento</label><input data-l="pay" data-k="nome" value="${esc(y.nome)}"><label>Número de telefone</label><input data-l="pay" data-k="tel" value="${esc(y.tel)}">
 <label>Comprovativo <small>(opcional)</small></label><input type="file" id="comp" accept="image/*,.pdf"><br><br><button class="btn" id="confirm">CONFIRMAR PAGAMENTO</button>
 <p class="note">Nesta versão, o pagamento não é verificado automaticamente: os dados servem de registo e o desbloqueio é feito no navegador.</p></div>`}
function doneUI() {
  if (!s.pago) return '<div class="card">Conclua o pagamento para desbloquear.</div>';
  return `<div class="card"><h3>Pagamento enviado com sucesso!</h3><p>O seu CV está pronto para ser descarregado.</p>${s.unlocked ? `<h2>Seu Curriculum Vitae está pronto!</h2><button class="btn" id="pdf">BAIXAR PDF</button> <button class="btn ghost" onclick="window.print()">IMPRIMIR</button> <button class="btn ghost" id="edit">EDITAR CV</button> <button class="btn ghost" id="newcv">CRIAR NOVO CV</button>` : `<button class="btn big" id="unlock">DESBLOQUEAR CV</button>`}</div>`
}
function lines(t) { return (t || '').split('\n').filter(x => x.trim()) }
function per(a, b, c) { return [a, c ? 'Actual' : b].filter(Boolean).join(' – ') }
function cvHTML() {
  const p = s.p, f = s.perfil, foto = s.showFoto && s.foto;
  const sk = (a, tag) => a.map(x => tag ? `<span class="tag">${esc(x.n)}</span>` : `<p>${esc(x.n)}${x.l ? ' — ' + x.l : ''}</p>`).join('');
  const ct = [p.tel && '📞 ' + p.tel, p.whats && 'WhatsApp: ' + p.whats, p.email && '✉ ' + p.email, [p.bairro, p.mun, p.prov].filter(Boolean).join(', '), p.morada, p.linkedin, p.site, p.github].filter(Boolean);
  const pers = [p.nasc && 'Idade: ' + p.idade + ' anos', p.nac && 'Nacionalidade: ' + p.nac, p.civil && 'Estado civil: ' + p.civil, p.sexo && 'Sexo: ' + p.sexo].filter(Boolean);
  const lg = s.lang.filter(x => x.n), sec = (h, b) => b ? `<h3>${h}</h3>${b}` : '';
  const items = (a, fn) => a.map(fn).join('');
  const ul = d => lines(d).length ? `<ul>${lines(d).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const ex = s.extra, add = [ex.carta && 'Carta de condução: ' + ex.carta, ex.viajar && 'Disponível para viajar: ' + ex.viajar, ex.imediata && 'Disponibilidade imediata: ' + ex.imediata, ex.mudar && 'Mudança de cidade: ' + ex.mudar, ex.outras].filter(Boolean);
  return `<div class="cv ${s.tpl}" style="--c:${s.cor};--s:${s.cor2};--fs:${s.fs}px"><aside>${foto ? `<img class="pic ${s.fotoEst}" src="${s.foto}">` : ''}
 ${sec('Contacto', ct.map(x => `<p>${esc(x)}</p>`).join(''))}${sec('Dados pessoais', pers.map(x => `<p>${esc(x)}</p>`).join(''))}
 ${sec('Competências técnicas', sk(s.skT, s.tpl == 't6'))}${sec('Competências profissionais', sk(s.skP, s.tpl == 't6'))}${sec('Idiomas', lg.map(x => `<p>${esc(x.n)}${x.l ? ' — ' + x.l : ''}</p>`).join(''))}</aside>
 <main><h1>${esc(p.nome || 'O Seu Nome')}</h1><div class="tt">${esc(f.titulo || f.cargo || p.prof)}</div>${sec('Perfil profissional', f.resumo && `<p>${esc(f.resumo)}</p>`)}
 ${sec('Experiência profissional', items(s.exp.filter(x => x.empresa || x.cargo), x => `<div class="it"><b>${esc(x.cargo)} — ${esc(x.empresa)}</b><span class="dt">${esc(per(x.inicio, x.fim, x.actual))} ${esc([x.local, x.tipo].filter(Boolean).join(' · '))}</span>${ul(x.desc)}</div>`))}
 ${sec('Formação académica', items(s.edu.filter(x => x.inst || x.curso), x => `<div class="it"><b>${esc(x.curso)}${x.grau ? ' (' + esc(x.grau) + ')' : ''}</b>${esc(x.inst)}<span class="dt"> ${esc(per(x.inicio, x.fim, x.actual))}</span>${ul(x.desc)}</div>`))}
 ${sec('Cursos e certificações', items(s.cert.filter(x => x.n), x => `<div class="it"><b>${esc(x.n)}</b>${esc(x.inst)} <span class="dt">${esc(x.data)} ${esc(x.cod)}</span></div>`))}
 ${sec('Projectos', items(s.proj.filter(x => x.n), x => `<div class="it"><b>${esc(x.n)}</b>${esc([x.func, x.tec].filter(Boolean).join(' · '))}<br>${esc(x.desc)} <span class="dt">${esc(x.link)}</span></div>`))}
 ${sec('Principais realizações', items(s.ach.filter(x => x.n), x => `<div class="it"><b>${esc(x.n)}</b>${esc(x.desc)}</div>`))}
 ${sec('Voluntariado', items(s.vol.filter(x => x.n), x => `<div class="it"><b>${esc(x.n)}</b>${esc(x.func)} <span class="dt">${esc(x.data)}</span> ${esc(x.desc)}</div>`))}
 ${sec('Informações adicionais', add.map(x => `<p>${esc(x)}</p>`).join(''))}
 ${sec('Referências', s.refReq ? '<p>Disponíveis mediante solicitação.</p>' : items(s.ref.filter(x => x.n), x => `<div class="it"><b>${esc(x.n)}</b>${esc([x.cargo, x.org, x.tel, x.email].filter(Boolean).join(' · '))}</div>`))}</main></div>`
}
function preview() { $('#cv').innerHTML = cvHTML(); fit() }
function fit() { const w = $('#pwrap').clientWidth - 20; $('#cv').style.zoom = Math.min(1, w / 794) }
function render() {
  const n = STEPS.length; $('#stepLbl').textContent = `Etapa ${s.step + 1} de ${n}`; $('#bar').style.width = ((s.step + 1) / n * 100) + '%';
  $('#stepBox').innerHTML = stepUI(); $('#prev').style.visibility = s.step ? 'visible' : 'hidden'; $('#next').style.visibility = s.step >= n - 1 ? 'hidden' : 'visible';
  $('#next').textContent = STEPS[s.step].k == 'review' ? 'Ir para pagamento →' : 'Seguinte →'; preview(); save()
}
document.addEventListener('input', e => {
  const d = e.target.dataset; if (!d.l && !d.g) return; const v = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
  if (d.g) { s[d.g] = v; preview(); save(); return }
  if (['p', 'perfil', 'extra', 'pay'].includes(d.l)) s[d.l][d.k] = v; else s[d.l][+d.i][d.k] = v;
  if (d.k == 'nasc' && v) s.p.idade = Math.floor((Date.now() - new Date(v)) / 31557600000); preview(); save()
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.id == 'foto' && t.files[0]) { const r = new FileReader(); r.onload = () => { const im = new Image(); im.onload = () => { const c = document.createElement('canvas'), m = Math.min(1, 500 / Math.max(im.width, im.height)); c.width = im.width * m; c.height = im.height * m; c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); s.foto = c.toDataURL('image/jpeg', .85); render() }; im.src = r.result }; r.readAsDataURL(t.files[0]) }
  if (t.id == 'showFoto') { s.showFoto = t.checked; preview(); save() } if (t.id == 'refReq') { s.refReq = t.checked; render() }
  if (t.dataset.sug !== undefined) { const i = t.dataset.sug; $('#sg' + i).innerHTML = (SUG[t.value] || []).map(x => `<button class="chip" data-use="${i}" data-t="${esc(x)}">+ ${x}</button>`).join('') }
});
document.addEventListener('click', e => {
  const t = e.target, d = t.dataset;
  if (d.add) { s[d.add].push({}); render() } if (d.rm) { s[d.rm].splice(+d.i, 1); render() }
  if (d.use !== undefined) { const x = s.exp[+d.use]; x.desc = (x.desc ? x.desc + '\n' : '') + d.t; const sel = document.querySelector(`[data-sug="${d.use}"]`).value; if (!x.cargo) x.cargo = sel; render() }
  if (d.sk) { const a = s[d.sk], j = a.findIndex(y => y.n == d.n); j < 0 ? a.push({ n: d.n, l: '' }) : a.splice(j, 1); render() }
  if (d.skadd) { const n = $('#in' + d.skadd).value.trim(); if (n) s[d.skadd].push({ n, l: $('#lv' + d.skadd).value }); render() }
  if (d.skrm) { s[d.skrm].splice(+d.i, 1); render() }
  if (d.tpl) { s.tpl = d.tpl; render() } if (d.pm) { s.pay.m = d.pm; render() }
  if (t.id == 'rmfoto') { s.foto = ''; render() }
  if (t.id == 'confirm') { const y = s.pay; if (!y.m || !y.nome || !y.tel) { alert('Escolha o método e preencha o nome e o telefone.'); return } s.pago = true; s.step = 13; render() }
  if (t.id == 'unlock') { s.unlocked = true; render() } if (t.id == 'edit') { s.step = 0; render() }
  if (t.id == 'newcv' && confirm('Começar um novo CV? Os dados actuais serão apagados.')) { localStorage.removeItem(KEY); s = blank(); render() }
  if (t.id == 'pdf') {
    const c = $('#cv'), z = c.style.zoom; c.style.zoom = 1; const done = () => c.style.zoom = z;
    html2pdf().set({ margin: 0, filename: 'Curriculum-Vitae.pdf', image: { type: 'jpeg', quality: .98 }, html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'mm', format: 'a4' }, pagebreak: { mode: ['css', 'legacy'], avoid: '.it' } }).from(c.firstElementChild).save().then(done).catch(() => { done(); alert('Não foi possível gerar o PDF. Use IMPRIMIR e escolha "Guardar como PDF".') })
  }
});
$('#next').onclick = () => { if (s.step == 0 && !(s.p.nome && s.p.tel && s.p.email) && !confirm('Faltam campos obrigatórios (nome, telefone, email). Continuar mesmo assim?')) return; s.step = Math.min(13, s.step + 1); render(); scrollTo(0, 0) };
$('#prev').onclick = () => { s.step = Math.max(0, s.step - 1); render(); scrollTo(0, 0) };
addEventListener('resize', fit);
if (s.p.nome || s.exp.some(x => x.empresa)) { $('#resume').hidden = false; $('#cont').onclick = () => { $('#resume').hidden = true; render() }; $('#fresh').onclick = () => { localStorage.removeItem(KEY); s = blank(); $('#resume').hidden = true; render() } } else render();

















/* =========================================================
   CV ANGOLA — DESENHO DO CURRÍCULO
   Substitui no seu script: per(), cvHTML() e preview()
   (apague as versões antigas e cole este bloco no lugar)
   ========================================================= */

/* Exemplo mostrado enquanto o utilizador ainda não escreveu nada */
const SAMPLE = {
  p: { nome: 'Maria Fernanda Silva', nasc: '1998-05-14', idade: 28, nac: 'Angolana', civil: 'Solteiro(a)', sexo: 'Feminino',
       tel: '923 000 000', email: 'maria.silva@email.com', mun: 'Talatona', prov: 'Luanda' },
  perfil: { cargo: 'Assistente Administrativa', titulo: 'Assistente Administrativa',
            resumo: 'Profissional organizada e responsável, com experiência em atendimento, gestão de documentos e apoio administrativo. Capacidade de trabalhar em equipa e cumprir prazos.' },
  exp: [
    { empresa: 'Empresa Exemplo, Lda.', cargo: 'Assistente Administrativa', local: 'Luanda', tipo: 'Tempo inteiro', inicio: '2022-03', actual: true,
      desc: 'Organização e arquivo de documentos\nAtendimento telefónico e presencial\nElaboração de relatórios mensais' },
    { empresa: 'Comércio Geral', cargo: 'Recepcionista', local: 'Luanda', tipo: 'Tempo inteiro', inicio: '2020-01', fim: '2022-02',
      desc: 'Recepção de clientes e visitantes\nGestão de agenda e correspondência' }
  ],
  edu: [{ inst: 'Instituto Superior Exemplo', curso: 'Gestão de Empresas', grau: 'Licenciatura', inicio: '2016-09', fim: '2020-07' }],
  lang: [{ n: 'Português', l: 'Nativo' }, { n: 'Inglês', l: 'Intermédio' }],
  cert: [], proj: [], ach: [], vol: [], ref: [],
  skT: [{ n: 'Microsoft Word', l: 'Avançado' }, { n: 'Excel', l: 'Intermédio' }, { n: 'PowerPoint', l: '' }],
  skP: [{ n: 'Comunicação', l: '' }, { n: 'Organização', l: '' }, { n: 'Trabalho em equipa', l: '' }],
  extra: {}, refReq: true
};

/* Verdadeiro enquanto o formulário está vazio */
function isDemo() {
  return !(s.p.nome || s.p.tel || s.p.email || s.perfil.resumo || s.perfil.cargo || s.perfil.titulo ||
    s.exp.some(x => x.empresa || x.cargo) || s.edu.some(x => x.inst || x.curso) ||
    s.lang.some(x => x.n) || s.cert.some(x => x.n) || s.proj.some(x => x.n) ||
    s.skT.length || s.skP.length);
}

/* "2024-03" → "Mar 2024" */
function fmt(v) {
  const m = /^(\d{4})-(\d{2})$/.exec(v || '');
  return m ? ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][+m[2] - 1] + ' ' + m[1] : (v || '');
}
function per(a, b, c) { return [fmt(a), c ? 'Actual' : fmt(b)].filter(Boolean).join(' – ') }

function cvHTML() {
  const demo = isDemo(), d = demo ? SAMPLE : s, p = d.p, f = d.perfil;
  const hasPic = s.showFoto && (s.foto || demo);
  const pic = !hasPic ? '' : s.foto && !demo
    ? `<img class="pic ${s.fotoEst}" src="${s.foto}" alt="">`
    : `<div class="pic ph ${s.fotoEst}">Foto</div>`;

  const sec = (h, b) => b ? `<section><h3>${h}</h3>${b}</section>` : '';
  const lines = t => (t || '').split('\n').filter(x => x.trim());
  const ul = t => lines(t).length ? `<ul>${lines(t).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const it = (title, date, sub, body) =>
    `<div class="it"><div class="ih"><b>${esc(title)}</b>${date ? `<span class="dt">${esc(date)}</span>` : ''}</div>${sub ? `<div class="sub">${esc(sub)}</div>` : ''}${body || ''}</div>`;
  const tags = a => a.length ? `<div class="tags">${a.map(x => `<span class="tag">${esc(x.n)}${x.l ? ' · ' + esc(x.l) : ''}</span>`).join('')}</div>` : '';

  const ct = [p.tel, p.whats && 'WhatsApp ' + p.whats, p.email, [p.bairro, p.mun, p.prov].filter(Boolean).join(', '), p.morada, p.linkedin, p.site, p.github].filter(Boolean);
  const pers = [p.nasc && p.idade != null && 'Idade: ' + p.idade + ' anos', p.nac && 'Nacionalidade: ' + p.nac, p.civil && 'Estado civil: ' + p.civil, p.sexo && 'Sexo: ' + p.sexo].filter(Boolean);
  const ex = d.extra || {};
  const add = [ex.carta && 'Carta de condução: ' + ex.carta, ex.viajar && 'Disponível para viajar: ' + ex.viajar, ex.imediata && 'Disponibilidade imediata: ' + ex.imediata, ex.mudar && 'Mudança de cidade: ' + ex.mudar, ex.outras].filter(Boolean);
  const lg = d.lang.filter(x => x.n);

  return `<div class="cv ${s.tpl}${hasPic ? '' : ' nopic'}" style="--c:${s.cor};--s:${s.cor2};--fs:${s.fs}px">
${pic}
<div class="hd"><h1>${esc(p.nome || 'O Seu Nome')}</h1><div class="tt">${esc(f.titulo || f.cargo || p.prof || '')}</div>
${ct.length ? `<div class="ct">${ct.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}</div>
<aside>
${sec('Dados pessoais', pers.map(x => `<p>${esc(x)}</p>`).join(''))}
${sec('Competências técnicas', tags(d.skT))}
${sec('Competências profissionais', tags(d.skP))}
${sec('Idiomas', lg.map(x => `<p><b>${esc(x.n)}</b>${x.l ? ' — ' + esc(x.l) : ''}</p>`).join(''))}
${sec('Informações adicionais', add.map(x => `<p>${esc(x)}</p>`).join(''))}
</aside>
<main>
${sec('Perfil profissional', f.resumo && `<p>${esc(f.resumo)}</p>`)}
${sec('Experiência profissional', d.exp.filter(x => x.empresa || x.cargo).map(x => it(x.cargo || x.empresa, per(x.inicio, x.fim, x.actual), [x.cargo ? x.empresa : '', x.local, x.tipo].filter(Boolean).join(' · '), ul(x.desc))).join(''))}
${sec('Formação académica', d.edu.filter(x => x.inst || x.curso).map(x => it((x.curso || x.inst) + (x.grau ? ' (' + x.grau + ')' : ''), per(x.inicio, x.fim, x.actual), [x.curso ? x.inst : '', x.local].filter(Boolean).join(' · '), ul(x.desc))).join(''))}
${sec('Cursos e certificações', d.cert.filter(x => x.n).map(x => it(x.n, fmt(x.data), [x.inst, x.cod].filter(Boolean).join(' · '), ul(x.desc))).join(''))}
${sec('Projectos', d.proj.filter(x => x.n).map(x => it(x.n, fmt(x.data), [x.func, x.tec].filter(Boolean).join(' · '), (x.desc ? `<p>${esc(x.desc)}</p>` : '') + (x.link ? `<p>${esc(x.link)}</p>` : ''))).join(''))}
${sec('Principais realizações', d.ach.filter(x => x.n).map(x => it(x.n, '', '', x.desc ? `<p>${esc(x.desc)}</p>` : '')).join(''))}
${sec('Voluntariado', d.vol.filter(x => x.n).map(x => it(x.n, fmt(x.data), x.func, x.desc ? `<p>${esc(x.desc)}</p>` : '')).join(''))}
${sec('Referências', d.refReq ? '<p>Disponíveis mediante solicitação.</p>' : d.ref.filter(x => x.n).map(x => it(x.n, '', [x.cargo, x.org].filter(Boolean).join(' · '), `<p>${esc([x.tel, x.email].filter(Boolean).join(' · '))}</p>`)).join(''))}
</main></div>`;
}

function preview() {
  $('#cv').innerHTML = cvHTML() + (isDemo()
    ? '<div class="demo-note">Isto é um exemplo. À medida que preencher o formulário, os seus dados substituem este texto.</div>' : '');
  fit();
}
