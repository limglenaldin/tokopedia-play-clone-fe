import numeral from 'numeral'

// rupiah / indonesia (ID)
numeral.register('locale', 'id', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'rb',
        million: 'jt',
        billion: 'm',
        trillion: 't'
    },
    currency: {
        symbol: 'Rp '
    }
})

numeral.locale('id');

const useRupiahCurrency = (number) => {
  return numeral(number).format('$0,0');
}

export { useRupiahCurrency }