import { setActivePath } from '../../lib/common/navigation'
import { SIGNUP_ROUTE_PATH } from './signup.constant'

export async function SignupRouter(ctx) {
    await ctx.store.dispatch(setActivePath(SIGNUP_ROUTE_PATH));
}