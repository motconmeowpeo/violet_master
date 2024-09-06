export interface Product {
  id: number;
  name: string;
  price: string;
  value?: string;
  ingredient?: string;
  time?: string;
  quantity?: string;
  weight?: string;
  nsx?: string;
  hsx?: string;
  made?: string;
  img?: string;
  cartQuantity: number;
}
export const DATA: Product[] = [
  {
    id: 1,
    img: 'assets/paper.jpg',
    cartQuantity: 1,
    name: 'Giấy Hương Chery Blossom',
    price: '250.000',
    value:
      'Giấy hương Anh Đào làm dịu thần kinh, kìm hãm căng thẳng, cho sự thư giãn và giảm căng thẳng ngay tức thì. Với khả năng dịu dàng làm dịu thần kinh, sản phẩm mang đến cảm giác thoải mái và sảng khoái ngay lập tức. Không chỉ thế, nó còn cải thiện giấc ngủ và làm sạch không khí, để bạn tận hưởng không gian sống trong lành và thư thái hơn bao giờ hết.',
    ingredient: 'Giấy Washi, tinh dầu Hoa Anh Đào.',
    time: '03 phút cho mỗi miếng giấy',
    quantity: '10 miếng',
    weight: '50g',
    nsx: '01.07.2024',
    hsx: '12 tháng kể từ ngày sản xuất.',
    made: 'Sản xuất tại Việt Nam',
  },
  {
    id: 2,
    img: 'assets/paper.jpg',
    cartQuantity: 1,
    name: 'Giấy Hương Hydrangeas',
    price: '250.000',
    value:
      'Giấy hương Cẩm Tú Cầu là chìa khóa cho cuộc sống thư thái và cân bằng tinh thần. Với hiệu quả giảm lo âu và căng thẳng, sản phẩm không chỉ giúp ổn định tinh thần mà còn tạo không gian trong lành, thanh khiết và dễ chịu cho không gian sống của bạn.',
    ingredient: 'Giấy Washi, tinh dầu Cẩm Tú Cầu.',
    time: '03 phút cho mỗi miếng giấy',
    quantity: '10 miếng',
    weight: '50g',
    nsx: '01.07.2024',
    hsx: '12 tháng kể từ ngày sản xuất.',
    made: 'Sản xuất tại Việt Nam',
  },
  {
    id: 3,
    img: 'assets/paper.jpg',
    cartQuantity: 1,
    name: 'Giấy Hương Osmanthus',
    price: '250.000',
    value:
      'Giấy hương Hoa Mộc làm dịu thần kinh, kìm hãm căng thẳng, cho sự thư giãn và giảm căng thẳng ngay tức thì. Với khả năng dịu dàng làm dịu thần kinh, sản phẩm mang đến cảm giác thoải mái và sảng khoái ngay lập tức. Không chỉ thế, nó còn cải thiện giấc ngủ và làm sạch không khí, để bạn tận hưởng không gian sống trong lành và thư thái hơn bao giờ hết.',
    ingredient: 'Giấy Washi, tinh dầu Hoa Mộc.',
    time: '03 phút cho mỗi miếng giấy',
    quantity: '10 miếng',
    weight: '50g',
    nsx: '01.07.2024',
    hsx: '12 tháng kể từ ngày sản xuất.',
    made: 'Sản xuất tại Việt Nam',
  },
  {
    id: 4,
    img: 'assets/paper.jpg',
    cartQuantity: 1,
    name: 'Giấy Hương White Tea',
    price: '250.000',
    value:
      'Giấy hương Trà trắng hương giải pháp dưỡng sinh giúp làm dịu thần kinh và giảm căng thẳng. Sản phẩm mang đến cảm giác thoải mái và sảng khoái, đồng thời tái tạo năng lượng tích cực cho cơ thể.',
    ingredient: 'Giấy Washi, tinh dầu Trà Trắng..',
    time: '03 phút cho mỗi miếng giấy',
    quantity: '10 miếng',
    weight: '50g',
    nsx: '01.07.2024',
    hsx: '12 tháng kể từ ngày sản xuất.',
    made: 'Sản xuất tại Việt Nam',
  },
  {
    id: 5,
    img: 'assets/nen_thom.jpg',
    cartQuantity: 1,
    name: 'Nến Thơm Chery Blossom',
    price: '200.000',
  },
  {
    id: 6,
    img: 'assets/nen_thom.jpg',
    cartQuantity: 1,
    name: 'Nến Thơm Hydrangeas',
    price: '200.000',
  },
  {
    id: 7,
    img: 'assets/nen_thom.jpg',
    cartQuantity: 1,
    name: 'Nến Thơm Osmanthus',
    price: '200.000',
  },
  {
    id: 8,
    img: 'assets/nen_thom.jpg',
    cartQuantity: 1,
    name: 'Nến Thơm White Tea',
    price: '200.000',
  },
  {
    id: 9,
    img: 'assets/tinh_dau.jpg',
    cartQuantity: 1,
    name: 'Tinh Dầu Khuyếch Tán Chery Blossom',
    price: '180.000',
  },
  {
    id: 10,
    img: 'assets/tinh_dau.jpg',
    cartQuantity: 1,
    name: 'Tinh Dầu Khuyếch Tán Hydrangeas',
    price: '180.000',
  },
  {
    id: 11,
    img: 'assets/tinh_dau.jpg',
    cartQuantity: 1,
    name: 'Tinh Dầu Khuyếch Tán Osmanthus',
    price: '180.000',
  },
  {
    id: 12,
    img: 'assets/tinh_dau.jpg',
    cartQuantity: 1,
    name: 'Tinh Dầu Khuyếch Tán White Tea',
    price: '180.000',
  },
];
