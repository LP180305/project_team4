import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const PaymentModal = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 3000); // Quay về trang chủ sau 2 giây
  };

  return (
    <div className="payment-modal">
      <div>
        <p>Scan the QR code below to pay:</p>
        <QRCode value="Thông tin thanh toán của bạn" size={256} />
      </div>
      {paymentSuccess && (
        <div className="success-message">
          <p>Success payment, thank you!</p>
        </div>
      )}
      <button className="Btn" onClick={handlePaymentSuccess}>
        Pay
        <svg className="svgIcon" viewBox="0 0 576 512">
          <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
        </svg>
      </button>
    </div>
  );
};

export default PaymentModal;
