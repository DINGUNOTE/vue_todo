# vue_todo
Vue 활용 TODO 앱 만들어보기

1차 작업 완료 후 문제점
1. 인풋 박스에서 입력한 아이템들이 로컬 스토리지에 저장은 되나, 리스트에 실제로 반영되지 않는다. (Refresh를 해야만 리스트 갱신 됨)
2. footer 컴포넌트의 Clear All이 실행될 때 리스트들과 연동되지 않는다.

해결 방법
1. event emit과 props를 사용해서 데이터와 기능들을 한 곳에서 관리하게 리팩토링한다.



출처 : 인프런 캡틴판교님 VueJS 중급 강좌 
https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/dashboard
