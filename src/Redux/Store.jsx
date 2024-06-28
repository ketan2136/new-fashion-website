// import { applyMiddleware, createStore } from "redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist"; // Corrected the import
// import { thunk } from "redux-thunk"; // Corrected the import
import { rootReducher } from "./reducer";

// export const configureStore = () => {
//   const persistConfig = {
//     key: "root",
//     storage: storage,
//     whitelist: ["item"],
//   };

//   const sagaMiddleware = createSagaMiddleware();

//   const middlewares = [thunk, sagaMiddleware]; // Combine middlewares

//   const persistedReducer = persistReducer(persistConfig, rootReducher);

// // const store = createStore(rootReducher, applyMiddleware(thunk));

// // export default store

//   const persistor = persistStore(store);

//   return { store, persistor };
// };

// export const { store } = configureStore();
// export const persistor = persistStore(store);

// import { applyMiddleware, createStore } from "redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import { thunk } from "redux-thunk"; // Corrected the import
// import createSagaMiddleware from "redux-saga"; // Import saga middleware
// import { rootReducer } from "./reducer"; // Corrected the import
// export const configureStore = () => {
//   const persistConfig = {
//     key: "root",
//     storage: storage,
//     whitelist: ["item", "cart", "discount"],
//   };

//   const sagaMiddleware = createSagaMiddleware();

//   const middlewares = [thunk, sagaMiddleware];

//   const persistedReducer = persistReducer(persistConfig, rootReducher); // Corrected the spelling of rootReducer

//   const store = createStore(
//     persistedReducer,
//     applyMiddleware(...middlewares) // Apply middlewares
//   );

//   const persistor = persistStore(store);

//   return { store, persistor };
// };

// const { store, persistor } = configureStore(); // Destructure the result of configureStore

// export { store, persistor };


import { applyMiddleware, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk }   from "redux-thunk"; // Corrected the import
import createSagaMiddleware from "redux-saga";
// import { rootReducher } from "./reducer"; // Corrected the import

export const configureStore = () => {
  const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["item", "cart", "discount"],
  };

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [thunk, sagaMiddleware];

  const persistedReducer = persistReducer(persistConfig, rootReducher);

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));

  const persistor = persistStore(store);

  // Debugging: Log state on each store update
  store.subscribe(() => {
    console.log("Store updated:", store.getState());
  });

  return { store, persistor };
};

const { store, persistor } = configureStore();

export { store, persistor };
