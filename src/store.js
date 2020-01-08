import { createStore, action, persist } from 'easy-peasy';

const store = createStore(
    persist({
      count: 1,
      inc: action(state => {
        state.count += 1;
      }),
      decre: action(state => {
        state.count -= 1;
      })
    },
    {
      whitelist: ['count'],
    })
  );

export default store;