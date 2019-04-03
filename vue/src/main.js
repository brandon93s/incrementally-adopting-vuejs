import { generateMountFunction, exposeGlobal } from '@/entry'
import '@/entry/main'

const mount = {
  helloMeetup: generateMountFunction(() => import('@/components/HelloMeetup'))
}

exposeGlobal({
  mount
})
