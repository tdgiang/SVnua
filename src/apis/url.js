export const root = 'http://api.dcvinvest.com/';
export default {
  urllogin: root + 'api/auth/customer-login',
  urlRegistor: root + 'api/auth/customer-register',
  urlGetListMethod: root + 'api/v1/payments/get-list-deposit-method',
  urlGetOTP: root + 'api/auth/customer-get-otp',
  urlVerifyOTP: root + 'api/auth/customer-verify-otp',
  urlForgotPassword: root + 'api/auth/customer-forgot-password',

  urlVerifyAccount: root + 'api/v1/customers/verify-account',
  urlGetListNew: root + '/api/v1/news/posts',
  urlGetCategoryNew: root + 'api/v1/news/categories',
  urlGetListMedia: root + 'api/v1/news/videos',
  urlMediaDetail: root + 'api/v1/videos/detail',
  urlGetListCalendar: root + 'api/v1/news/calendar',

  //Methodpay
  urlGetListWithDraw: root + 'api/v1/payments/get-list-withdraw-method',
  urlWithdraw: root + 'api/v1/customers/request-withdraw',
  urlListBank: root + 'api/v1/payments/get-list-bank',
  urlAddMethodBank: root + 'api/v1/customers/store-payment-method',
  urlDeleteMethodBank: root + 'api/v1/customers/delete-payment-method',
  urlUpdateMethodBank: root + 'api/v1/customers/update-payment-method',

  //Home
  urlGetTransaction: root + 'api/v1/customers/statistic-transaction',

  //History
  urlGetListHistory: root + 'api/v1/customers/get-list-transaction-history',

  urlGetListNotification: root + 'api/v1/customers/get-list-notification',
  urlWalletDeposit: root + 'api/v1/customers/request-deposit',

  urlGetListPacketCQG: root + 'api/v1/customers/get-list-fee-package',
  urlOpenCQG: root + 'api/v1/customers/register-open-cqg',

  urlUpdateInforUser: root + 'api/v1/customers/update-general-info',

  urlUpdateLanguage: root + 'api/v1/customers/update-language',
};
