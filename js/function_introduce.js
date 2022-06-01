let picture = introduce.picture ? introduce.picture : "man.jpg"

document.getElementById('profile').innerHTML += `<img src="${picture}" width="170"><div class="mt-3"><h4>${introduce.name}</h4><p class="text-secondary mb-1">${introduce.desc}</p></div>`;

document.getElementById('biography').innerHTML += `
    <div class="row">
    <div class="col-sm-3">
    <h6 class="mb-0">이메일주소</h6>
    </div>
    <div class="col-sm-9 text-secondary">
    ${introduce.email}
    </div>
    </div>
    <hr>
    <div class="row">
    <div class="col-sm-3">
    <h6 class="mb-0">전화번호</h6>
    </div>
    <div class="col-sm-9 text-secondary">
    ${introduce.phonenumber}
    </div>
    </div>
    <hr>
    <div class="row">
    <div class="col-sm-3">
    <h6 class="mb-0">다니는 학교</h6>
    </div>
    <div class="col-sm-9 text-secondary">
    ${introduce.school}
    </div>
    </div>
    `