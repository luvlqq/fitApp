'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">fitapp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiGatewayModule.html" data-type="entity-link" >ApiGatewayModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ApiGatewayModule-0d2a88831ce80f2b66a8361c33a421b5f9e7f250f056d71e4cb1804f73bc9435d3eefb57cd6610edddf5b7153ea96c36614a475bb5123884fe79f1fc16022b02"' : 'data-bs-target="#xs-injectables-links-module-ApiGatewayModule-0d2a88831ce80f2b66a8361c33a421b5f9e7f250f056d71e4cb1804f73bc9435d3eefb57cd6610edddf5b7153ea96c36614a475bb5123884fe79f1fc16022b02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiGatewayModule-0d2a88831ce80f2b66a8361c33a421b5f9e7f250f056d71e4cb1804f73bc9435d3eefb57cd6610edddf5b7153ea96c36614a475bb5123884fe79f1fc16022b02"' :
                                        'id="xs-injectables-links-module-ApiGatewayModule-0d2a88831ce80f2b66a8361c33a421b5f9e7f250f056d71e4cb1804f73bc9435d3eefb57cd6610edddf5b7153ea96c36614a475bb5123884fe79f1fc16022b02"' }>
                                        <li class="link">
                                            <a href="injectables/AtGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppleHealthGatewayModule.html" data-type="entity-link" >AppleHealthGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' : 'data-bs-target="#xs-controllers-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' :
                                            'id="xs-controllers-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' }>
                                            <li class="link">
                                                <a href="controllers/AppleHealthGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppleHealthGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' : 'data-bs-target="#xs-injectables-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' :
                                        'id="xs-injectables-links-module-AppleHealthGatewayModule-5b2b70c95866373cd56d10de7a6324e6ec31af73637bca6f6d85249c7f5e0fe3f9ce4dfb7f283a5df47045ce253e9e9a5be556507a31ce3f06f1f0cab2981e0c"' }>
                                        <li class="link">
                                            <a href="injectables/AppleHealthGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppleHealthGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthGatewayModule.html" data-type="entity-link" >AuthGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' : 'data-bs-target="#xs-controllers-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' :
                                            'id="xs-controllers-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' }>
                                            <li class="link">
                                                <a href="controllers/AuthGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' : 'data-bs-target="#xs-injectables-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' :
                                        'id="xs-injectables-links-module-AuthGatewayModule-e3cacabfd36e0b78b227c55384b4c13f01bea20e9711c4bdbe2890dab4d58a02ef46efb1ddedeba2e7754ca45ab48ae6f09fb1969c98df09031f26650b3b4f8f"' }>
                                        <li class="link">
                                            <a href="injectables/AuditService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthGatewayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtTokensService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtTokensService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthMicroserviceModule.html" data-type="entity-link" >AuthMicroserviceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthMicroserviceModule-ba032c58beeb981e4b9b4739968648bda96d0b1467e576903346366b1fb08e539caf7f595b0d478df250ea53b17cde056b90f6a95f245d56ab01b282ca4901ec"' : 'data-bs-target="#xs-injectables-links-module-AuthMicroserviceModule-ba032c58beeb981e4b9b4739968648bda96d0b1467e576903346366b1fb08e539caf7f595b0d478df250ea53b17cde056b90f6a95f245d56ab01b282ca4901ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthMicroserviceModule-ba032c58beeb981e4b9b4739968648bda96d0b1467e576903346366b1fb08e539caf7f595b0d478df250ea53b17cde056b90f6a95f245d56ab01b282ca4901ec"' :
                                        'id="xs-injectables-links-module-AuthMicroserviceModule-ba032c58beeb981e4b9b4739968648bda96d0b1467e576903346366b1fb08e539caf7f595b0d478df250ea53b17cde056b90f6a95f245d56ab01b282ca4901ec"' }>
                                        <li class="link">
                                            <a href="injectables/AtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' :
                                            'id="xs-controllers-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' :
                                        'id="xs-injectables-links-module-AuthModule-0997e85a78d5a507d3ff3bd2b28670cac821ccbdbe3b9c133eb904c461ebb36ed88092d4c49373e3844d1091c22dbd3028dd6ffba7499ef6f4d30f4148bfbb49"' }>
                                        <li class="link">
                                            <a href="injectables/AuditService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtTokensService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtTokensService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailerMicroserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailerMicroserviceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExerciseGatewayModule.html" data-type="entity-link" >ExerciseGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' : 'data-bs-target="#xs-controllers-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' :
                                            'id="xs-controllers-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' }>
                                            <li class="link">
                                                <a href="controllers/ExerciseGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExerciseGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' : 'data-bs-target="#xs-injectables-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' :
                                        'id="xs-injectables-links-module-ExerciseGatewayModule-df15d5398e95f040ea9f6cfb1b884a4782e1199dbc531a3e850372e50959d98fd1c2bccad3416770bb663f129a72930e72df91e4e1f1e991d0e65354c975a7c1"' }>
                                        <li class="link">
                                            <a href="injectables/ExerciseGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExerciseGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExerciseMicroserviceModule.html" data-type="entity-link" >ExerciseMicroserviceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' : 'data-bs-target="#xs-controllers-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' :
                                            'id="xs-controllers-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' }>
                                            <li class="link">
                                                <a href="controllers/ExerciseMicroserviceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExerciseMicroserviceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' : 'data-bs-target="#xs-injectables-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' :
                                        'id="xs-injectables-links-module-ExerciseMicroserviceModule-1c61230b10f4e27150e0cad6aa1d9382d80ff5b36f37dae8744f48a83b6283da9057ee781fae4559571cba2ec7a192742675e56c20b6ea0a4bc8a20f62f7d8e9"' }>
                                        <li class="link">
                                            <a href="injectables/AuditService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExerciseMicroserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExerciseMicroserviceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExerciseRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExerciseRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocalCacheModule.html" data-type="entity-link" >LocalCacheModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MailerMicroserviceModule.html" data-type="entity-link" >MailerMicroserviceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailerMicroserviceModule-3e3a61d341293b4ef9046f825f0abd8499972b591a38857b53eb8c2db4579eee58eda5eac50a1c07996566fdc01ca950d2d2fe4fbb49d561450266973a9220bb"' : 'data-bs-target="#xs-injectables-links-module-MailerMicroserviceModule-3e3a61d341293b4ef9046f825f0abd8499972b591a38857b53eb8c2db4579eee58eda5eac50a1c07996566fdc01ca950d2d2fe4fbb49d561450266973a9220bb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailerMicroserviceModule-3e3a61d341293b4ef9046f825f0abd8499972b591a38857b53eb8c2db4579eee58eda5eac50a1c07996566fdc01ca950d2d2fe4fbb49d561450266973a9220bb"' :
                                        'id="xs-injectables-links-module-MailerMicroserviceModule-3e3a61d341293b4ef9046f825f0abd8499972b591a38857b53eb8c2db4579eee58eda5eac50a1c07996566fdc01ca950d2d2fe4fbb49d561450266973a9220bb"' }>
                                        <li class="link">
                                            <a href="injectables/MailerMicroserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailerMicroserviceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-2a8bea65e470bf645ac4e321ca80e92d2b34dcd12b6322e4201a0a23f54c482941aadc3e99af3096988bd1a8f7e8296fb88b90d3157588667eeb06cf3d576fe4"' : 'data-bs-target="#xs-injectables-links-module-MailModule-2a8bea65e470bf645ac4e321ca80e92d2b34dcd12b6322e4201a0a23f54c482941aadc3e99af3096988bd1a8f7e8296fb88b90d3157588667eeb06cf3d576fe4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-2a8bea65e470bf645ac4e321ca80e92d2b34dcd12b6322e4201a0a23f54c482941aadc3e99af3096988bd1a8f7e8296fb88b90d3157588667eeb06cf3d576fe4"' :
                                        'id="xs-injectables-links-module-MailModule-2a8bea65e470bf645ac4e321ca80e92d2b34dcd12b6322e4201a0a23f54c482941aadc3e99af3096988bd1a8f7e8296fb88b90d3157588667eeb06cf3d576fe4"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MealsGatewayModule.html" data-type="entity-link" >MealsGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' : 'data-bs-target="#xs-controllers-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' :
                                            'id="xs-controllers-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' }>
                                            <li class="link">
                                                <a href="controllers/MealsGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' : 'data-bs-target="#xs-injectables-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' :
                                        'id="xs-injectables-links-module-MealsGatewayModule-f130fedb834215230c4133481b22de78c1a713010b8b7ad89572850ccdeabcb8f9a111390d4f89c4c62e9316848b67b3eca08884ef21427d98ffe4c7ddb62732"' }>
                                        <li class="link">
                                            <a href="injectables/MealsGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MealsMicroserviceModule.html" data-type="entity-link" >MealsMicroserviceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MealsModule.html" data-type="entity-link" >MealsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' : 'data-bs-target="#xs-controllers-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' :
                                            'id="xs-controllers-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' }>
                                            <li class="link">
                                                <a href="controllers/MealsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' : 'data-bs-target="#xs-injectables-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' :
                                        'id="xs-injectables-links-module-MealsModule-f3b5be95cd3897cbc4ef5149e25df65c6ee699091c500e708e559f4839746c7a81146144990ed94a3ad551e35d304bb12a099e5c354f080ccbdc992a1dde3c3e"' }>
                                        <li class="link">
                                            <a href="injectables/MealsMicroserviceRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsMicroserviceRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MealsMicroserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsMicroserviceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' : 'data-bs-target="#xs-controllers-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' :
                                            'id="xs-controllers-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' : 'data-bs-target="#xs-injectables-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' :
                                        'id="xs-injectables-links-module-NotificationsModule-7c106fe73846c80bc10fa8a51d65317e5525aea4f171b110d09d35b0c4a9185affdbc3b054324743f0f300a217be067e2ab1f79560d17c7d4d4856c3792894df-1"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NutritionGatewayModule.html" data-type="entity-link" >NutritionGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' : 'data-bs-target="#xs-controllers-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' :
                                            'id="xs-controllers-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' }>
                                            <li class="link">
                                                <a href="controllers/NutritionGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' : 'data-bs-target="#xs-injectables-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' :
                                        'id="xs-injectables-links-module-NutritionGatewayModule-36ebd3b19b47a1297993c1704120e812cb68bed7f2d3d2a1db622034f250693efe364c48e89593b4c731242ffc765da53abba0c2c00c437a3ffd31f546a423cc"' }>
                                        <li class="link">
                                            <a href="injectables/NutritionGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-8f57f7d741865e6ee2f976627a2ec6160dc4e0d842ab239becf810c6ff6c072b937a910b869e628ecfcc5529d3e26a0312c0b075f41f22393e0899ac7f12fe99"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-8f57f7d741865e6ee2f976627a2ec6160dc4e0d842ab239becf810c6ff6c072b937a910b869e628ecfcc5529d3e26a0312c0b075f41f22393e0899ac7f12fe99"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-8f57f7d741865e6ee2f976627a2ec6160dc4e0d842ab239becf810c6ff6c072b937a910b869e628ecfcc5529d3e26a0312c0b075f41f22393e0899ac7f12fe99"' :
                                        'id="xs-injectables-links-module-PrismaModule-8f57f7d741865e6ee2f976627a2ec6160dc4e0d842ab239becf810c6ff6c072b937a910b869e628ecfcc5529d3e26a0312c0b075f41f22393e0899ac7f12fe99"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RmqModule.html" data-type="entity-link" >RmqModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RmqModule-68918631dfd494c126c89e748d1e7362aa8a8c8824e7107c6434056d79bc9433b47c14d86a62f5f0f2f263be4693ebd284b77391fc741fe14107540a9ae71760"' : 'data-bs-target="#xs-injectables-links-module-RmqModule-68918631dfd494c126c89e748d1e7362aa8a8c8824e7107c6434056d79bc9433b47c14d86a62f5f0f2f263be4693ebd284b77391fc741fe14107540a9ae71760"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RmqModule-68918631dfd494c126c89e748d1e7362aa8a8c8824e7107c6434056d79bc9433b47c14d86a62f5f0f2f263be4693ebd284b77391fc741fe14107540a9ae71760"' :
                                        'id="xs-injectables-links-module-RmqModule-68918631dfd494c126c89e748d1e7362aa8a8c8824e7107c6434056d79bc9433b47c14d86a62f5f0f2f263be4693ebd284b77391fc741fe14107540a9ae71760"' }>
                                        <li class="link">
                                            <a href="injectables/RmqService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RmqService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadVideoGatewayModule.html" data-type="entity-link" >UploadVideoGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' : 'data-bs-target="#xs-controllers-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' :
                                            'id="xs-controllers-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' }>
                                            <li class="link">
                                                <a href="controllers/UploadVideoGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadVideoGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' : 'data-bs-target="#xs-injectables-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' :
                                        'id="xs-injectables-links-module-UploadVideoGatewayModule-50fa54c3f5b93025a192af32049ad59e4c3d0dc8ee835de482866983374e8d1533580465baba1fbddeb8857f6e5752382f08be378ba1b4ebb14e32e05010d65a"' }>
                                        <li class="link">
                                            <a href="injectables/UploadVideoGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadVideoGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadVideoMicroserviceModule.html" data-type="entity-link" >UploadVideoMicroserviceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' : 'data-bs-target="#xs-controllers-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' :
                                            'id="xs-controllers-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' }>
                                            <li class="link">
                                                <a href="controllers/UploadVideoMicroserviceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadVideoMicroserviceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' : 'data-bs-target="#xs-injectables-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' :
                                        'id="xs-injectables-links-module-UploadVideoMicroserviceModule-4acb5261183cec75833c93aec0d2455a406b4ce3a5e9d81d674bb43464582aa96b0855a747c7c7b7b0a09ba5fbd401b82e8a9f304f75ec55c07d139d190fd90c"' }>
                                        <li class="link">
                                            <a href="injectables/UploadVideoMicroserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadVideoMicroserviceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadVideoRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadVideoRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersGatewayModule.html" data-type="entity-link" >UsersGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' : 'data-bs-target="#xs-controllers-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' :
                                            'id="xs-controllers-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' }>
                                            <li class="link">
                                                <a href="controllers/UsersGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' : 'data-bs-target="#xs-injectables-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' :
                                        'id="xs-injectables-links-module-UsersGatewayModule-090d99eb32690175501ba07dabd384508c6933334a137558227859cf8ed5d6bc613206a81e43467d4f2037193303077506fc6427727448e408e2a5c5a48b4fb8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersMicroserviceModule.html" data-type="entity-link" >UsersMicroserviceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' : 'data-bs-target="#xs-controllers-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' :
                                            'id="xs-controllers-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' }>
                                            <li class="link">
                                                <a href="controllers/UsersMicroserviceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersMicroserviceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' : 'data-bs-target="#xs-injectables-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' :
                                        'id="xs-injectables-links-module-UsersMicroserviceModule-b4e95277f6806be260c643cd195b716fed67f75e3eaad3bb58ed502f79100cd1997e3ed1f190fe2abfe63458274a37ae924714998310b6f120088dc5e921d2ed"' }>
                                        <li class="link">
                                            <a href="injectables/AtGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtGuard</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersMicroserviceRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersMicroserviceRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersMicroserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersMicroserviceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WinstonLoggerModule.html" data-type="entity-link" >WinstonLoggerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkoutsGatewayModule.html" data-type="entity-link" >WorkoutsGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' : 'data-bs-target="#xs-controllers-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' :
                                            'id="xs-controllers-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' }>
                                            <li class="link">
                                                <a href="controllers/WorkoutsGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' : 'data-bs-target="#xs-injectables-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' :
                                        'id="xs-injectables-links-module-WorkoutsGatewayModule-59db89a7d2bc898250fc397f6f64d5cf86aa89f53813f4fba832fefaab03d7a5dbe57cb315961212034caf13e8c4dcd66f6b0fb28a612cb55c44727cc8d544e5"' }>
                                        <li class="link">
                                            <a href="injectables/WorkoutsGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkoutsMicroserviceModule.html" data-type="entity-link" >WorkoutsMicroserviceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkoutsModule.html" data-type="entity-link" >WorkoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' : 'data-bs-target="#xs-controllers-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' :
                                            'id="xs-controllers-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' }>
                                            <li class="link">
                                                <a href="controllers/WorkoutsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' : 'data-bs-target="#xs-injectables-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' :
                                        'id="xs-injectables-links-module-WorkoutsModule-e7e60979f0d654c86b07abe9a73520dd7d53fb725f4f240950d0e4a97ecc2f5179126980e136396280c20819f48c46ad2564c539ba105a2d27e95e63316bf34a"' }>
                                        <li class="link">
                                            <a href="injectables/AuditService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkoutsMicroserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsMicroserviceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkoutsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/NotificationsController.html" data-type="entity-link" >NotificationsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessDenied.html" data-type="entity-link" >AccessDenied</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadRequestError.html" data-type="entity-link" >BadRequestError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Class.html" data-type="entity-link" >Class</a>
                            </li>
                            <li class="link">
                                <a href="classes/Class-1.html" data-type="entity-link" >Class</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExerciseDto.html" data-type="entity-link" >CreateExerciseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExerciseDto-1.html" data-type="entity-link" >CreateExerciseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMealDto.html" data-type="entity-link" >CreateMealDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkoutsDto.html" data-type="entity-link" >CreateWorkoutsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkoutsDto-1.html" data-type="entity-link" >CreateWorkoutsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DtoBadRequest.html" data-type="entity-link" >DtoBadRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/DtoUnauthorized.html" data-type="entity-link" >DtoUnauthorized</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthDataDto.html" data-type="entity-link" >HealthDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotificationsConsumer.html" data-type="entity-link" >NotificationsConsumer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Payload.html" data-type="entity-link" >Payload</a>
                            </li>
                            <li class="link">
                                <a href="classes/Payload-1.html" data-type="entity-link" >Payload</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RtGuard.html" data-type="entity-link" >RtGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendResetCodeDto.html" data-type="entity-link" >SendResetCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthorizedError.html" data-type="entity-link" >UnauthorizedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateExerciseDto.html" data-type="entity-link" >UpdateExerciseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthData.html" data-type="entity-link" >UpdateHealthData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMealsDto.html" data-type="entity-link" >UpdateMealsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWorkoutsDto.html" data-type="entity-link" >UpdateWorkoutsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkoutResponse.html" data-type="entity-link" >WorkoutResponse</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AtGuard.html" data-type="entity-link" >AtGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtStrategy.html" data-type="entity-link" >AtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuditService.html" data-type="entity-link" >AuditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailerRepository.html" data-type="entity-link" >MailerRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationsService.html" data-type="entity-link" >NotificationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RtStrategy.html" data-type="entity-link" >RtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Exercise.html" data-type="entity-link" >Exercise</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RmqModuleOptions.html" data-type="entity-link" >RmqModuleOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});