

      const loop = () => {
          
      }

      const _template = `
        <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <p class="card-text">[SUBJECT]</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">보기</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">저장소</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        `



        const replaceHtml = (param0, param1) => {
            let _output = _template.replace('[SUBJECT]', param0).replace('[LINK]', param1)
            return _output;
        }

        for (let i in homework) {
          document.getElementById('work').innerHTML = replaceHtml(homework[i].name, homework[i].link);
        }
