import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    senha: '',
    termos: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados para registro no ecossistema:", formData);
  };

  return (
    <div className="atelier-register-wrapper">
      <div className="atelier-register-card">
        
        {/* HEADER DO CARD */}
        <div className="register-header-atelier">
          <span className="register-tag">COMUNIDADE</span>
          <h2 className="register-title-atelier">Faça parte do ecossistema</h2>
          <p className="register-subtitle-atelier">
            Conecte-se à nossa rede de bioestrutura e sustentabilidade.
          </p>
          <div className="header-line-atelier"></div>
        </div>

        {/* FORMULÁRIO */}
        <form className="register-form-atelier" onSubmit={handleSubmit}>
          <div className="atelier-input-group">
            <label>NOME DE USUÁRIO</label>
            <input 
              type="text" 
              placeholder="usuario" 
              required 
              value={formData.usuario}
              onChange={(e) => setFormData({...formData, usuario: e.target.value})}
            />
          </div>

          <div className="atelier-input-group">
            <label>E-MAIL</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="atelier-input-group">
            <label>SENHA</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={formData.senha}
              onChange={(e) => setFormData({...formData, senha: e.target.value})}
            />
          </div>

          <div className="atelier-checkbox-area">
            <label className="atelier-checkbox-label">
              <input 
                type="checkbox" 
                required 
                checked={formData.termos}
                onChange={(e) => setFormData({...formData, termos: e.target.checked})}
              />
              <span className="atelier-checkmark"></span>
              Aceito os termos de sustentabilidade
            </label>
          </div>

          <div className="register-button-spacer">
            <button type="submit" className="btn-atelier-register">
              CRIAR MINHA CONTA
            </button>
          </div>
        </form>
        
        <div className="register-footer-atelier">
          <span>Já possui uma conta? <a href="/login">Entrar</a></span>
        </div>
      </div>
    </div>
  );
};

export default Register;