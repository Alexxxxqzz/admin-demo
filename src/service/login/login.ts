import hyRequest from '..'

export function loginRequest(account: any) {
  return hyRequest.post({
    url: '',
    data: account
  })
}
