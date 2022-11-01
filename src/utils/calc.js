export const calcTax = (income, taxable, medicareLevy) => {
    const threshold = taxable.filter((tax) => income > tax.floor && income <= tax.ceiling)[0];
    let rs = threshold.base + (income - threshold.floor) * threshold.increator;
    if(income > 37000) rs = rs - income * medicareLevy;
    return rs ;
}

export const calcSuper = (income, superContribution) => {
    return income * superContribution;
}