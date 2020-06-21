import { LOGIN } from "./constants";
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { makeSelectEmail, makeSelectPassword } from "./selectors";
import { loginSuccess, loginFailure } from "./actions";
import { displayError, displayLoading } from "containers/App/actions";
import request from 'utils/request';

export function* login() {
  const email = yield select(makeSelectEmail);
  const password = yield select(makeSelectPassword);
  const url = `http://localhost:3000/login`;

  try {
    yield put (displayLoading(true));
    const res = yield call(request, url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
    yield all([
      put(loginSuccess(res, email)),
      put(displayLoading(false)),
    ]);
  } catch (err) {
    yield all([
      put(loginFailure()),
      put(displayLoading(false)),
      put(displayError(err)),
    ])
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, login);
}