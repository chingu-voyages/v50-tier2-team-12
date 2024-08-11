export default function OrderSummary({
  credits,
  subtotal,
  courierTip,
  delivery,
  isCredits,
}) {
  const total = subtotal + courierTip + delivery;
  const hasSufficientCredits = credits >= subtotal + courierTip + delivery;
  if (isCredits && hasSufficientCredits) credits = total;

  const summaryItems = [
    {
      title: 'subtotal',
      value: `$${subtotal.toFixed(2)}`,
    },
    {
      title: 'credits',
      value: `-$${credits.toFixed(2)}`,
    },
    {
      title: 'courier tip',
      value: `$${courierTip.toFixed(2)}`,
    },
    {
      title: 'delivery',
      value: delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`,
    },
  ];

  return (
    <section className='my-12 space-y-2'>
      {summaryItems.map(({ title, value }) => {
        if (!isCredits && title === 'credits') return null;
        return (
          <p
            key={title}
            className='font-medium text-xl flex items-center justify-between'
          >
            <span className='capitalize'>{title}</span>
            <span>{value}</span>
          </p>
        );
      })}
    </section>
  );
}
