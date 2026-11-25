import React, { useEffect, useState } from 'react';
import { legacyMarkup } from './legacyMarkup.js';

function ForgotPassword() {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const demoCode = '246810';

  function sendCode(e) {
    e.preventDefault(); setError('');
    const users = JSON.parse(localStorage.getItem('driveease_users_v2') || '[]');
    if (!users.some(u => u.email?.toLowerCase() === email.trim().toLowerCase())) {
      setError('If an account exists for this address, recovery instructions would be sent.'); return;
    }
    setStep('verify'); setMessage(`Classroom demo code: ${demoCode}`);
  }
  function verify(e) {
    e.preventDefault(); setError('');
    if (code !== demoCode) { setError('That demo verification code is incorrect.'); return; }
    setStep('reset'); setMessage('Identity step completed for this local demonstration.');
  }
  function reset(e) {
    e.preventDefault(); setError('');
    if (password.length < 8) { setError('Use at least 8 characters.'); return; }
    if (password !== confirm) { setError('The passwords do not match.'); return; }
    const users = JSON.parse(localStorage.getItem('driveease_users_v2') || '[]');
    const user = users.find(u => u.email?.toLowerCase() === email.trim().toLowerCase());
    if (!user) { setError('Account not found.'); return; }
    user.password = password;
    localStorage.setItem('driveease_users_v2', JSON.stringify(users));
    setStep('done'); setMessage('Password updated in this browser for the academic demo.');
  }
  return <main className="recovery-page">
    <a className="recovery-brand" href="/"> <span className="brand-mark">D</span><span>DriveEase<small>RENTAL MANAGEMENT</small></span></a>
    <section className="recovery-card">
      <div className="recovery-symbol">✦</div>
      <p className="eyebrow">ACCOUNT RECOVERY</p>
      <h1>{step === 'email' ? 'Forgot your password?' : step === 'verify' ? 'Check your code' : step === 'reset' ? 'Create a new password' : 'Password updated'}</h1>
      <p className="muted">{step === 'email' ? 'Enter the email address associated with your DriveEase account.' : step === 'verify' ? `Enter the verification code for ${email}.` : step === 'reset' ? 'Choose a new password for your account.' : 'You can now return to DriveEase and sign in.'}</p>
      {step === 'email' && <form onSubmit={sendCode}><label>Email address</label><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/><button className="btn btn-primary btn-full">Continue</button></form>}
      {step === 'verify' && <form onSubmit={verify}><label>Verification code</label><input inputMode="numeric" required maxLength="6" value={code} onChange={e=>setCode(e.target.value)} placeholder="6-digit code"/><button className="btn btn-primary btn-full">Verify code</button></form>}
      {step === 'reset' && <form onSubmit={reset}><label>New password</label><input type="password" required minLength="8" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 8 characters"/><label>Confirm password</label><input type="password" required value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="Re-enter password"/><button className="btn btn-primary btn-full">Update password</button></form>}
      {step === 'done' && <a className="btn btn-primary btn-full recovery-return" href="/">Return to login</a>}
      {error && <p className="recovery-error" role="alert">{error}</p>}
      {message && <p className="recovery-message" role="status">{message}</p>}
      <a className="recovery-back" href="/">← Back to DriveEase</a>
      <p className="recovery-disclaimer">Academic demonstration only. The displayed code is simulated; no email is sent. Passwords in Local Storage are not secure. A real reset flow requires a trusted backend/authentication provider and expiring, single-use tokens.</p>
    </section>
  </main>;
}

function LegacyDriveEase() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/legacy.js';
    script.async = false;
    script.onload = () => { document.documentElement.classList.add('driveease-ready'); };
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);
  return <div className="legacy-app" dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    const onClick = e => {
      const a = e.target.closest('a[href="/forgot-password"], a[href="/"]');
      if (!a || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault(); history.pushState({}, '', a.getAttribute('href')); setPath(window.location.pathname);
    };
    document.addEventListener('click', onClick);
    return () => { window.removeEventListener('popstate', onPop); document.removeEventListener('click', onClick); };
  }, []);
  return path === '/forgot-password' ? <ForgotPassword /> : <LegacyDriveEase />;
}
