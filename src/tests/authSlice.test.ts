import authReducer, { loginSuccess, logout } from '../store/slices/authSlice';

describe('Auth Slice', () => {
  it('should handle loginSuccess', () => {
    const state = authReducer(undefined, loginSuccess({ email: 'test@test.com' }));
    expect(state.isLoggedIn).toBe(true);
    expect(state.user?.email).toBe('test@test.com');
  });

  it('should handle logout', () => {
    const initial = { isLoggedIn: true, user: { email: 'a' } };
    const state = authReducer(initial, logout());
    expect(state.isLoggedIn).toBe(false);
    expect(state.user).toBe(null);
  });
});
