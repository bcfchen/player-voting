import * as types from "../constants/action-types";

export function beginAjaxCall() { return { type: types.BEGIN_AJAX_CALL } }
export function ajaxCallSuccess() { return { type: types.AJAX_CALL_SUCCESS } }
