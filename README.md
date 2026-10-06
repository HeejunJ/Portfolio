# Heejun Jang — Portfolio Site

순수 HTML / CSS / JS로 만든 1페이지 포트폴리오 사이트입니다. 빌드 과정이 없어서 GitHub Pages에 파일을 올리기만 하면 바로 배포됩니다.

## 파일 구성

```
index.html      메인 페이지 (모든 섹션 포함)
style.css       스타일 (PPT와 동일한 화이트 + 블러쉬핑크 에디토리얼 시스템)
script.js       모바일 메뉴, 스크롤 reveal, 맨 위로 가기 버튼
assets/         차트 이미지, 앱 목업 이미지
```

## GitHub Pages로 배포하는 방법

1. GitHub에서 새 저장소를 만듭니다. 저장소 이름을 `<GitHub 아이디>.github.io` 로 하면 `https://<GitHub 아이디>.github.io` 주소로 바로 열리고, 다른 이름으로 만들면 `https://<GitHub 아이디>.github.io/<저장소 이름>` 경로로 열립니다.
2. 이 폴더 안의 파일 전체(`index.html`, `style.css`, `script.js`, `assets/`)를 그 저장소에 푸시합니다.

   ```bash
   cd portfolio_site
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/<GitHub 아이디>/<저장소 이름>.git
   git push -u origin main
   ```

3. GitHub 저장소 페이지에서 **Settings → Pages**로 들어갑니다.
4. "Build and deployment" 항목에서 Source를 **Deploy from a branch**로 두고, Branch를 `main` / `/(root)`로 선택한 뒤 저장합니다.
5. 1~2분 뒤 상단에 뜨는 주소로 접속하면 사이트가 열립니다.

## 내용 수정하기

- 텍스트: `index.html` 안의 문구를 직접 수정하면 됩니다 (섹션마다 주석으로 구분되어 있어요).
- 색상: `style.css` 최상단 `:root { ... }` 안의 색상 값만 바꾸면 전체 톤이 함께 바뀝니다.
- 이메일 / 연락처: `index.html`의 `#contact` 섹션에서 수정하세요.
- 이미지: `assets/` 폴더의 파일을 교체하고 `index.html`의 `<img src="assets/...">` 경로만 맞추면 됩니다.

## 로컬에서 미리보기

브라우저로 `index.html` 파일을 그냥 열어도 되고, 더 정확한 미리보기를 원하면:

```bash
cd portfolio_site
python3 -m http.server 8000
```

그 다음 `http://localhost:8000` 접속.
