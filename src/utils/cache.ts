enum cacheType {
  local,
  session
}

class cache {
  storage: Storage
  constructor(type: cacheType) {
    this.storage =
      type === cacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const localCache = new cache(cacheType.local)
const sessionCache = new cache(cacheType.session)

export { localCache, sessionCache }
