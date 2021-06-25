// import { Container } from './styles';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

const Home = () => {
	return (
		<div>
			<aside>
				<img src={illustrationImg} alt='letmeask' />
				<strong>Toda pergunta tem uma resposta.</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</aside>
			<main>
				<div>
					<img src={logoImg} alt='letmeask' />
					<button>
						<img src={googleIconImg} alt='Acesse com o google' />
						Crie sua sala com o Google
					</button>
					<div>ou entre em uma sala</div>
					<form action=''>
						<input type='text' placeholder='Digite o código da sala' />
						<button type='submit'>Entrar na sala</button>
					</form>
				</div>
			</main>
		</div>
	);
};

export default Home;
