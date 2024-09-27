const nav_list_item = document.querySelectorAll('.l1');
    function hollow_design_active(){
        nav_list_item.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    nav_list_item.forEach((item) =>
    item.addEventListener('click',hollow_design_active));