import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

          // this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.key(i));
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      // 로컬스토리지에 입력값 저장
      const obj = { completed: false, item: todoItem }; // 완료 여부 체크값을 추가하기 위해서 객체를 만듦
      localStorage.setItem(todoItem, JSON.stringify(obj)); // JSON.stringify : 자바스크립트 객체를 문자열로 변환해주는 API
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item); // 로컬스토리지에서 값을 삭제
      state.todoItems.splice(payload.index, 1); // 배열에서 해당 인덱스에 해당하는 값을 1개 삭제한다.
    },
    toggleOneItem(state, payload) {
      // todoItem.completed = !todoItem.completed;
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      // 로컬 스토리지의 데이터 갱신
      localStorage.removeItem(payload.todoItem, payload.index);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear(); // 로컬스토리지 비우기
      state.todoItems = []; // 리스트 배열 초기화
    }
  }
});
