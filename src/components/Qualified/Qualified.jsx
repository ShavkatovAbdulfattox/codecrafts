import './Qualified.scss';
export const Qualified = () => {
	return (
		<div className='container'>
			<div className='qualified_box'>
				<p className='powered_pr'>codewars tomonidan quvvatlanadi</p>
				<div className='wrapper'>
					<h2>Malakali </h2>
					<div className='dots'>
						<span className='dot'>⨀</span>
						<span className='dot'>⨀</span>
						<span className='dot'>⨀</span>
					</div>
				</div>

				<p className='qualified_pr'>
					dunyodagi eng ilgor kodlashni baholash platformasi ishga olish
					malakasini oshirish va sertifikatlashtirish dasturlarini
					kengaytirishni istagan tashkilotlar uchun.
				</p>
				<a href='/'>Batafsil malumot</a>
			</div>
		</div>
	);
};
