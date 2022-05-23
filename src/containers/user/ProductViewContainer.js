import { ProductView } from "../../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiUrl } from "../../constants/routes";

const ProductViewContainer = ({ product, option, setOption }) => {
	const settings = {
		arrows: true,
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<ProductView>
			<ProductView.Wrapper>
				<ProductView.Text color="#f6aa8d" fontWeight="700">
					{`$${(
						product?.price *
						(1 - product?.discount / 100)
					).toFixed(2)}`}
				</ProductView.Text>

				<ProductView.Name>{product?.name}</ProductView.Name>

				<ProductView.Text uppercase={true} fontWeight="540">
					{product?.subCategory}
				</ProductView.Text>

				<ProductView.Text italic={true}>
					{product?.description}
				</ProductView.Text>

				{product?.options.map((option, index) => (
					<ProductView.ImagePreview
						key={index}
						src={`${apiUrl}/public${option.img[0]}`}
						onClick={() => setOption(index)}
					/>
				))}

				<ProductView.Title>SIZE:</ProductView.Title>

				{product?.options[option].quantityPerSize.map((size, index) => (
					<ProductView.Option key={index}>
						{size.size}
					</ProductView.Option>
				))}
			</ProductView.Wrapper>

			<ProductView.Wrapper>
				<Slider {...settings}>
					{product?.options[option].img.map((image, index) => (
						<ProductView.Image
							key={index}
							src={`${apiUrl}/public${image}`}
						/>
					))}
				</Slider>
			</ProductView.Wrapper>
		</ProductView>
	);
};

export default ProductViewContainer;
