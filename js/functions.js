

const weeks = [];

const template = `
<div class="col">
<a href="[LINK]" target=_blank>
<div class="card shadow-sm">
  <div class="card-body">
    <p class="card-text">[NAME]</p>
    <p class="card-text text-muted">[SRC]</p>
  </div>
</div>
</a>
</div>
`

const replaceHtml = (name, week) => {
    const link = `html5/${week}/${name}.html`;
    return template.replace('[NAME]', name).replace('[LINK]', link).replace('[SRC]', name + '.html')
}

for (const i in homework) {
    if (!weeks.includes(homework[i].week)) {
        weeks.push(homework[i].week)
    }
}

weeks.sort(function(a, b)  {
    return b - a;
});

for (const i in weeks) {
    let active = i == 0 ? ['active', 'show'] : '1';

    document.getElementById('v-pills-tab').innerHTML += `
    <button class="nav-link ${active[0]}" id="v-pills-${weeks[i]}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${weeks[i]}" type="button" role="tab">${weeks[i]}<span class="d-md">주차</span></button>`
    
    document.getElementById('v-pills-tabContent').innerHTML += `
    <div class="tab-pane fade" id="v-pills-${weeks[i]}" role="tabpanel">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="v-pilltab-${weeks[i]}"><code style="color: black;padding: .5rem; font-size: .7rem; background-color: rgba(110,118,129,0.4); border-radius: 6px;"><code></div></div>`
}

const firstChild = document.getElementById('v-pills-tabContent').firstElementChild;
const classActive = ['show', 'active'];

for (const i in classActive) {
    firstChild.classList.add(classActive[i])
}

for(const i in homework) {
    let weekis = homework[i].week;
    document.getElementById('v-pilltab-' + weekis).innerHTML += replaceHtml(homework[i].name, weekis, homework[i].src)
}

for(const i in homework) {
    let weekis = homework[i].week;
    let name = homework[i].name;
    let src = config.root + 'html5/' + weekis + '/' + name + '.html<br>';
    document.querySelector('#v-pilltab-' + weekis + ' code').innerHTML += src;
}