const _template = `
        <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <p class="card-text">[SUBJECT]</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="[LINK0]" class="btn btn-sm btn-outline-secondary">보기</button>
                <a href="[LINK1]" class="btn btn-sm btn-outline-secondary">저장소</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        `
const root = 'https://71911.github.io/';
const repo = 'https://github.com/71911/71911.github.io/tree/main/';

        const replaceHtml = (param0, param1, param2) => {
            let _output = _template.replace('[SUBJECT]', param0).replace('[LINK0]', root + param1).replace('[LINK1]', repo + param2)
            return _output;
        }

        for (let i in homework) {
          document.getElementById('work').innerHTML = replaceHtml(homework[i].name, homework[i].link, homework[i].repolink);
        }
