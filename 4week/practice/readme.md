# 4 장

### 1. head 와 body

```
html
<!DOCTYPE html>
<html lang="en">
<head>
    문서에 대한 정보
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    문서의 내용
</body>
</html>
```

### 2. id 와 class
```
<div id="abc"></div>
<div></div>
<div></div>
<div class="def"></div>
<div></div>
<div class="def"></div>
<div class="def"></div>
```
class: 문서 여러 개를 그룹화 시킴
id: 문서 사용자 설정

### 3. CSS (Cascading Style Sheet)
```
<style>
    body { background-color: mistyrose; }
    h3 { color: purple; }
    hr { border: 5px solid yellowgreen; }
    span { color: blue; font-size: 20px; }
</style>
```
여기서 h3, hr, span, body는 셀렉터입니다.

3_1) ```<style></style>``` 태그로 사용

3_2) ```<style>``` 태그는 ```<head>``` 태그에서만 사용

3_3) 여러 번 사용될 수 있음

3_4) ```<p style="color: ~~~">내용</p>```으로 사용 가능 (권장하지 않음)

### 4. CSS3 스타일 시트 파일을 불러오는 방법 2가지
4_1) ```<link>``` 태그 이용

```
<head>
    <link href="mystyle.css" type="text/css" rel="stylesheet">
</head>
```
4_2) ```@import``` 이용 (브라우저 과부하로 인한 사용 금지 [가급적])
```
<style>
    @import url(mystyle.css);
</style>
```

### 5. ```CSS3``` 스타일은 부모 태그로부터 상속
em: 부모 상속 메소드
```<p style="color: green">안녕하세요
    <em style="font-size: 25px">자식입니다.</em>
</p>
```

### 6. 셀렉터 
body: ```body.main```
class: .셀렉터 (하나의 그룹으로 묶어 적용)
id: 셀렉터 (각 태그를 유일하게 구분)
6_1) 셀렉터의 조합
```
div > strong { color: dodgerblue; }
```

직계 자식에 적용되는 스타일 시트
```
ul strong { color: dodgerblue; }
```

ul의 자손 strong에 적용되는 스타일 시트
6_2) 전체 셀렉터
*: 웹 페이지의 모든 태그에 적용
6_3) 속성 셀렉터
```
input[type="text"] { color: red; }
```

특정 속성에 일치하는 태그에 적용
6_4) 가상 클래스 셀렉터
```
a:visited { color: green; }
```

마우스가 올라갈 때 스타일 적용
마우스로 누르고 있는 상황에 적용
폰트: naver/D2coding 폰트 사용

### 7. 박스 모델
콘텐츠: width, height
패딩: padding
테두리: border_width
여백: margin
.left 등 프로퍼티가 존재함







