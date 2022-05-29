import { useRef } from "react";
import { ProductView } from "../../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiUrl } from "../../constants/routes";
import { addToCart } from "../../helpers/addToCart";

const ProductViewContainer = ({
	product,
	optionIndex,
	handleOptionChange,
	size,
	handleSizeChange,
	quantity,
	handleQuantityChange,
}) => {
	const settings = {
		arrows: false,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const sliderRef = useRef();

	const goToNext = () => {
		sliderRef.current.slickNext();
	};

	const goToPrevious = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<ProductView>
			<ProductView.Wrapper>
				<ProductView.Text
					color="#f6aa8d"
					fontWeight="700"
					fontSize="18px"
				>
					{`$${(
						product?.price *
						(1 - product?.discount / 100)
					).toFixed(2)}`}
				</ProductView.Text>

				{product?.discount > 0 && (
					<ProductView.SubText>{`$${product.price}`}</ProductView.SubText>
				)}

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
						onClick={() => handleOptionChange(index)}
						active={optionIndex === index}
					/>
				))}

				<ProductView.Title>SIZE:</ProductView.Title>

				{product?.options[optionIndex].quantityPerSize.map(
					(item, index) => (
						<ProductView.Option
							key={index}
							onClick={() => handleSizeChange(item.size)}
							active={size === item.size}
						>
							{item.size}
						</ProductView.Option>
					)
				)}

				<ProductView.Title>QUANTITY:</ProductView.Title>
				<ProductView.Input
					type="number"
					value={quantity}
					min={1}
					required
					onChange={({ target }) =>
						handleQuantityChange(target.value)
					}
				/>

				<ProductView.Button
					disabled={size === null}
					onClick={() =>
						addToCart(
							product._id,
							product.options[optionIndex].color,
							size,
							quantity
						)
					}
				>
					ADD TO CART
				</ProductView.Button>
			</ProductView.Wrapper>

			<ProductView.Wrapper>
				<Slider {...settings} ref={sliderRef}>
					{product?.options[optionIndex].img.map((image, index) => (
						<ProductView.Image
							key={index}
							src={`${apiUrl}/public${image}`}
						/>
					))}
				</Slider>

				<ProductView.PrevButton
					className="fas fa-chevron-left"
					onClick={goToPrevious}
				/>
				<ProductView.NextButton
					className="fas fa-chevron-right"
					onClick={goToNext}
				/>
			</ProductView.Wrapper>
		</ProductView>
	);
};

export default ProductViewContainer;
