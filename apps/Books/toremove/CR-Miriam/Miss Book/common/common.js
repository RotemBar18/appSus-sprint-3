export function getCurrencyIcon(currencyCode) {
    switch (currencyCode) {
      case 'EUR':
        return '€'
      case 'ILS':
        return '₪'
      case 'USD':
        return '$'
      default:
        return '£'
    }
  }