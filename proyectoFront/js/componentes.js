const componente_header = {
    template: `
    <nav class="navbar navbar-expand-sm ">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="./../img/logoHotel.webp" alt="logo hotel"></a>
            
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html" aria-current="page">Inicio <span class="visually-hidden">(current)</span></a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Usuarios</a>
                            <a class="dropdown-item" href="#">#</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    `
}