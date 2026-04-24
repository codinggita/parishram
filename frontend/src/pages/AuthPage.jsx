import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthPage = ({ type = 'login' }) => {
  const [isLogin, setIsLogin] = useState(type === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication for UI purposes
    login({ name: isLogin ? 'Demo User' : name, email, role: 'admin' });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2 font-heading font-bold text-3xl tracking-tight text-gray-900 justify-center">
          <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-xl font-extrabold text-white shadow-md">P</div>
          <span>Parishram</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? 'Or ' : 'Already have an account? '}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="font-medium text-accentPrimary hover:text-accentWarm transition-colors"
          >
            {isLogin ? 'start your 14-day free trial' : 'sign in here'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input type="text" required value={name} onChange={e => setName(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accentPrimary focus:border-accentPrimary sm:text-sm" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accentPrimary focus:border-accentPrimary sm:text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accentPrimary focus:border-accentPrimary sm:text-sm" />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 text-accentPrimary focus:ring-accentPrimary border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-accentPrimary hover:text-accentWarm">Forgot your password?</a>
                </div>
              </div>
            )}

            <div>
              <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accentPrimary hover:bg-accentWarm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentPrimary transition-colors">
                {isLogin ? 'Sign in' : 'Create account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
