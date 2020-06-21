import { REGISTER } from "./constants";
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { makeSelectEmail, makeSelectPassword } from "./selectors";
import { registerSuccess, registerFailure } from "./actions";
import { displayError, displayLoading } from "containers/App/actions";
import request from 'utils/request';

export function* register() {
  const email = yield select(makeSelectEmail);
  const password = yield select(makeSelectPassword);
  const url = `http://localhost:3000/register`;

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
      put(registerSuccess(res, email)),
      put(displayLoading(false)),
    ]);
  } catch (err) {
    yield all([
      put(registerFailure()),
      put(displayLoading(false)),
      put(displayError(err)),
    ])
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(REGISTER, register);
}
