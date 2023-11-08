import {configureStore} from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
});

export default store;
