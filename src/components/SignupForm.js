import React, { useState, useEffect } from 'react';
import '../styles/globalStyles.css';
import boxImg from '../styles/image-01.svg';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        date: '',
        email: '',
        number: '',
        gender: '',
        cep: '',
        cidade: '',
        estado: '',
        rua: '',
        num: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (!touched[name]) {
            setTouched(prevState => ({
                ...prevState,
                [name]: true
            }));
        }
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (formData.date && new Date(formData.date) > new Date()) {
            formErrors.date = "Data de nascimento não pode ser futura";
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "As senhas não coincidem";
            isValid = false;
        }

        Object.keys(formData).forEach(key => {
            if (!formData[key] && key !== 'confirmPassword' && key !== 'termsAccepted') {
                formErrors[key] = "Este campo é obrigatório";
                isValid = false;
            }
        });

        if (!formData.termsAccepted) {
            formErrors.termsAccepted = "Você deve aceitar os termos";
            isValid = false;
        }

        setErrors(formErrors);
        setIsSubmitEnabled(isValid);
    };

    useEffect(() => {
        validateForm();
    }, [formData]);

    const showError = (field) => touched[field] && errors[field];

    return (
        <div className="container">
            <div className="form-image">
                <img src={boxImg} alt="Imagem ilustrativa" />
            </div>

            <div className="form">
                <form action="#">
                    <div className="form-header">
                        <div className="title">
                            <h1>Cadastre-se</h1>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="fullName">Nome Completo</label>
                            <input
                                id="fullName"
                                type="text"
                                name="fullName"
                                placeholder="Digite seu nome completo"
                                value={formData.fullName}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, fullName: true }))}
                                required
                            />
                            {showError('fullName') && <p className="error">{errors.fullName}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="date">Data de Nascimento</label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, date: true }))}
                                required
                            />
                            {showError('date') && <p className="error">{errors.date}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                                required
                            />
                            {showError('email') && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="number">Celular</label>
                            <input
                                id="number"
                                type="tel"
                                name="number"
                                placeholder="(99)9 9999-9999"
                                value={formData.number}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, number: true }))}
                                required
                            />
                            {showError('number') && <p className="error">{errors.number}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="gender">Gênero</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, gender: true }))}
                                required
                            >
                                <option value="">Selecione o gênero</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                                <option value="Prefiro não dizer">Prefiro não dizer</option>
                            </select>
                            {showError('gender') && <p className="error">{errors.gender}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="cep">CEP</label>
                            <input
                                id="cep"
                                type="text"
                                name="cep"
                                placeholder="00000-00"
                                value={formData.cep}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, cep: true }))}
                                required
                            />
                            {showError('cep') && <p className="error">{errors.cep}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="cidade">Cidade</label>
                            <input
                                id="cidade"
                                type="text"
                                name="cidade"
                                placeholder="Digite o nome da cidade"
                                value={formData.cidade}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, cidade: true }))}
                                required
                            />
                            {showError('cidade') && <p className="error">{errors.cidade}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="estado">Estado</label>
                            <input
                                id="estado"
                                type="text"
                                name="estado"
                                placeholder="Digite o estado"
                                value={formData.estado}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, estado: true }))}
                                required
                            />
                            {showError('estado') && <p className="error">{errors.estado}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="rua">Rua</label>
                            <input
                                id="rua"
                                type="text"
                                name="rua"
                                placeholder="Digite o nome da rua"
                                value={formData.rua}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, rua: true }))}
                                required
                            />
                            {showError('rua') && <p className="error">{errors.rua}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="num">Número</label>
                            <input
                                id="num"
                                type="text"
                                name="num"
                                placeholder="Digite o estado"
                                value={formData.num}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, num: true }))}
                                required
                            />
                            {showError('num') && <p className="error">{errors.num}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="password">Senha</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Digite sua senha"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
                                required
                            />
                            {showError('password') && <p className="error">{errors.password}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="confirmPassword">Confirme sua Senha</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Digite sua senha novamente"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, confirmPassword: true }))}
                                required
                            />
                            {showError('confirmPassword') && <p className="error">{errors.confirmPassword}</p>}
                        </div>
                    </div>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            onBlur={() => setTouched(prev => ({ ...prev, termsAccepted: true }))}
                            required
                        />
                        <label htmlFor="termsAccepted">
                            Eu aceito os <a href="/terms">Termos de Serviço</a>
                        </label>
                        {showError('termsAccepted') && <p className="error">{errors.termsAccepted}</p>}
                    </div>

                    <div className="continue-button">
                        <button type="submit" disabled={!isSubmitEnabled}>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;