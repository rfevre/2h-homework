(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+m6X":
/*!******************************************************!*\
  !*** ./src/app/view-ticket/view-ticket.component.ts ***!
  \******************************************************/
/*! exports provided: ViewTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTicketComponent", function() { return ViewTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend.service */ "Xm9H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");






function ViewTicketComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewTicketComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/tickets"]; };
function ViewTicketComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewTicketComponent_div_0_span_11_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewTicketComponent_div_0_span_12_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Assignee user:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TODO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticket_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ticket: ", ticket_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ticket_r3.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ticket_r3.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ticket_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
function ViewTicketComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class ViewTicketComponent {
    constructor(backendService, route) {
        this.backendService = backendService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.ticket$ = this.backendService.ticket(id);
        });
    }
}
ViewTicketComponent.ɵfac = function ViewTicketComponent_Factory(t) { return new (t || ViewTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewTicketComponent, selectors: [["app-view-ticket"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "d-flex"], [1, "pr-2"], [1, "ml-auto"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], [1, "card-body"], [1, "card-text"], [1, "form-group"], ["for", "selectAssigneeUser"], [1, "col-6"], [1, "btn", "btn-primary", "w-100", 3, "routerLink"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"]], template: function ViewTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewTicketComponent_div_0_Template, 26, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewTicketComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.ticket$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdGlja2V0L3ZpZXctdGlja2V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-ticket',
                templateUrl: './view-ticket.component.html',
                styleUrls: ['./view-ticket.component.css']
            }]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Workspace\2h-homework\src\main.ts */"zUnb");


/***/ }),

/***/ "C5s6":
/*!********************************************************!*\
  !*** ./src/app/list-tickets/list-tickets.component.ts ***!
  \********************************************************/
/*! exports provided: ListTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTicketsComponent", function() { return ListTicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend.service */ "Xm9H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-ticket/add-ticket.component */ "D1Nj");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ticket/ticket.component */ "ODM+");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");









function ListTicketsComponent_div_0_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-ticket", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeTicketAssigneeEvent", function ListTicketsComponent_div_0_li_11_Template_app_ticket_changeTicketAssigneeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ticket_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.changeTicketAssignee(ticket_r5.id, $event); })("changeTicketCompletionEvent", function ListTicketsComponent_div_0_li_11_Template_app_ticket_changeTicketCompletionEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ticket_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.changeTicketCompletion(ticket_r5.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticket_r5 = ctx.$implicit;
    const usersAndTickets_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ticket", ticket_r5)("users", usersAndTickets_r3.users);
} }
function ListTicketsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-add-ticket", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTicketEvent", function ListTicketsComponent_div_0_Template_app_add_ticket_addTicketEvent_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addTicket($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListTicketsComponent_div_0_li_11_Template, 2, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usersAndTickets_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", usersAndTickets_r3.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", usersAndTickets_r3.tickets);
} }
function ListTicketsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class ListTicketsComponent {
    constructor(backendService) {
        this.backendService = backendService;
        this.usersAndTickets$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.backendService.users(), this.backendService.tickets()]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([users, tickets]) => ({
            users: users,
            tickets: tickets
        })));
    }
    changeTicketCompletion(ticketId, completed) {
        this.backendService.complete(ticketId, completed).toPromise();
    }
    changeTicketAssignee(ticketId, userId) {
        this.backendService.assign(ticketId, userId).toPromise();
    }
    addTicket(description) {
        this.backendService.newTicket({ description: description }).toPromise();
    }
}
ListTicketsComponent.ɵfac = function ListTicketsComponent_Factory(t) { return new (t || ListTicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"])); };
ListTicketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListTicketsComponent, selectors: [["app-list-tickets"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "row", "pb-4"], [1, "col-12"], [3, "users", "addTicketEvent"], [1, "row"], [1, "row", "list-unstyled"], ["class", "col-4 pb-3", 4, "ngFor", "ngForOf"], [1, "col-4", "pb-3"], [3, "ticket", "users", "changeTicketAssigneeEvent", "changeTicketCompletionEvent"]], template: function ListTicketsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListTicketsComponent_div_0_Template, 12, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListTicketsComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.usersAndTickets$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__["TicketComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdGlja2V0cy9saXN0LXRpY2tldHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTicketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-tickets',
                templateUrl: './list-tickets.component.html',
                styleUrls: ['./list-tickets.component.css']
            }]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "D1Nj":
/*!****************************************************!*\
  !*** ./src/app/add-ticket/add-ticket.component.ts ***!
  \****************************************************/
/*! exports provided: AddTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTicketComponent", function() { return AddTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");



class AddTicketComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.addTicketEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.descriptionForm = this.formBuilder.group({
            description: ''
        });
    }
    submitTicket(descriptionFormValue) {
        this.addTicketEvent.emit(descriptionFormValue['description']);
    }
}
AddTicketComponent.ɵfac = function AddTicketComponent_Factory(t) { return new (t || AddTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTicketComponent, selectors: [["app-add-ticket"]], inputs: { users: "users" }, outputs: { addTicketEvent: "addTicketEvent" }, decls: 14, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "card-text"], [1, "form-group"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description", "placeholder", "Enter description", 1, "form-control"], [1, "row"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "w-100"]], template: function AddTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add ticket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTicketComponent_Template_form_ngSubmit_4_listener() { return ctx.submitTicket(ctx.descriptionForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.descriptionForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC10aWNrZXQvYWRkLXRpY2tldC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-ticket',
                templateUrl: './add-ticket.component.html',
                styleUrls: ['./add-ticket.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addTicketEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ODM+":
/*!********************************************!*\
  !*** ./src/app/ticket/ticket.component.ts ***!
  \********************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





function TicketComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r5.id)("selected", ctx_r2.currentlyAssigneeUser && ctx_r2.currentlyAssigneeUser.id === user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
} }
function TicketComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeTicketCompletion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeTicketCompletion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/tickets", a1]; };
class TicketComponent {
    constructor() {
        this.changeTicketCompletionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeTicketAssigneeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.currentlyAssigneeUser = this.getCurrentlyTicketAssigneeUser();
    }
    getCurrentlyTicketAssigneeUser() {
        return this.users.find((user) => user.id === +this.ticket.assigneeId);
    }
    changeTicketCompletion() {
        this.changeTicketCompletionEvent.emit(!this.ticket.completed);
    }
    selectOnChange(userId) {
        this.changeTicketAssigneeEvent.emit(userId);
    }
}
TicketComponent.ɵfac = function TicketComponent_Factory(t) { return new (t || TicketComponent)(); };
TicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketComponent, selectors: [["app-ticket"]], inputs: { ticket: "ticket", users: "users" }, outputs: { changeTicketCompletionEvent: "changeTicketCompletionEvent", changeTicketAssigneeEvent: "changeTicketAssigneeEvent" }, decls: 25, vars: 10, consts: [[1, "card"], [1, "card-header"], [1, "d-flex"], [1, "pr-2"], [1, "ml-auto"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], [1, "card-body"], [1, "card-text"], [1, "form-group"], ["for", "selectAssigneeUser"], ["id", "selectAssigneeUser", 1, "form-control", 3, "change"], [3, "value"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6"], [1, "btn", "btn-primary", "w-100", 3, "routerLink"], ["class", "btn btn-success w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-warning w-100", 3, "click", 4, "ngIf"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], [3, "value", "selected"], [1, "btn", "btn-success", "w-100", 3, "click"], [1, "btn", "btn-warning", "w-100", 3, "click"]], template: function TicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketComponent_span_6_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Assignee user:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TicketComponent_Template_select_change_13_listener($event) { return ctx.selectOnChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TicketComponent_option_15_Template, 2, 3, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TicketComponent_button_23_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TicketComponent_button_24_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ticket: ", ctx.ticket.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ticket.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticket.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticket.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.ticket.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ticket.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticket.completed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC90aWNrZXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ticket',
                templateUrl: './ticket.component.html',
                styleUrls: ['./ticket.component.css']
            }]
    }], function () { return []; }, { ticket: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeTicketCompletionEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeTicketAssigneeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container", "py-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Xm9H":
/*!************************************!*\
  !*** ./src/app/backend.service.ts ***!
  \************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




/**
 * This service acts as a mock back-end.
 * It has some intentional errors that you might have to fix.
 */
function randomDelay() {
    return Math.random() * 4000;
}
class BackendService {
    constructor() {
        this.storedTickets = [
            {
                id: 0,
                completed: false,
                assigneeId: 111,
                description: 'Install a monitor arm'
            },
            {
                id: 1,
                completed: false,
                assigneeId: 222,
                description: 'Move the desk to the new location'
            }
        ];
        this.storedUsers = [{ id: 111, name: 'Victor' }, { id: 222, name: 'Jack Ouzi' }];
        this.lastId = 1;
        this.findUserById = id => this.storedUsers.find((user) => user.id === +id);
        this.findTicketById = id => this.storedTickets.find((ticket) => ticket.id === +id);
    }
    tickets() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.storedTickets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
    }
    ticket(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.findTicketById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
    }
    users() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.storedUsers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
    }
    user(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.findUserById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
    }
    newTicket(payload) {
        console.log(payload.description);
        const newTicket = {
            id: ++this.lastId,
            completed: false,
            assigneeId: null,
            description: payload.description
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(newTicket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((ticket) => this.storedTickets.push(ticket)));
    }
    assign(ticketId, userId) {
        const user = this.findUserById(+userId);
        const foundTicket = this.findTicketById(+ticketId);
        if (foundTicket && user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(foundTicket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((ticket) => {
                ticket.assigneeId = +userId;
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error('ticket or user not found'));
    }
    complete(ticketId, completed) {
        const foundTicket = this.findTicketById(+ticketId);
        if (foundTicket) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(foundTicket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((ticket) => {
                ticket.completed = completed;
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error('ticket not found'));
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-ticket/add-ticket.component */ "D1Nj");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backend.service */ "Xm9H");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ticket/ticket.component */ "ODM+");
/* harmony import */ var _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-ticket/view-ticket.component */ "+m6X");
/* harmony import */ var _list_tickets_list_tickets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-tickets/list-tickets.component */ "C5s6");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"], _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_4__["AddTicketComponent"], _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_10__["ViewTicketComponent"], _list_tickets_list_tickets_component__WEBPACK_IMPORTED_MODULE_11__["ListTicketsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"], _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_4__["AddTicketComponent"], _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_10__["ViewTicketComponent"], _list_tickets_list_tickets_component__WEBPACK_IMPORTED_MODULE_11__["ListTicketsComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                providers: [_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 4, vars: 0, consts: [[1, "text-center", "pt-2"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/reflect */ "VbrY");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es7/reflect */ "FZcq");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _list_tickets_list_tickets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-tickets/list-tickets.component */ "C5s6");
/* harmony import */ var _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-ticket/view-ticket.component */ "+m6X");






const routes = [
    {
        path: '',
        redirectTo: '/tickets',
        pathMatch: 'full'
    },
    {
        path: 'tickets',
        component: _list_tickets_list_tickets_component__WEBPACK_IMPORTED_MODULE_2__["ListTicketsComponent"]
    },
    {
        path: 'tickets/:id',
        component: _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_3__["ViewTicketComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map