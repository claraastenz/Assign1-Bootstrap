document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to the entire discount-row
    document.getElementById('discount-row').addEventListener('click', function (e) {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            const productName = e.target.dataset.product;
            const discountTitle = e.target.dataset.discountTitle;
            const discountCode = e.target.dataset.discountCode;

            document.getElementById('toast-product-name').textContent = productName;
            document.getElementById('toast-discount-title').textContent = discountTitle;
            document.getElementById('toast-discount-code').textContent = discountCode;

            // Get or create the toast instance with autohide set to false
            const toastElement = document.getElementById('liveToast');
            const toast = bootstrap.Toast.getOrCreateInstance(toastElement, { autohide: false });

            toast.show();

            //event listener for Escape key to hide the toast
            const hideToastOnEscape = function (event) {
                if (event.key === 'Escape') {
                    toast.hide();
                    document.removeEventListener('keydown', hideToastOnEscape);
                }
            };
            document.addEventListener('keydown', hideToastOnEscape);
        }
    });
});
