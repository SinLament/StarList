var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchPlanets() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/planets')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: // Đường dẫn đến JSON Server
                return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching planets:", error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createPlanetButton(planet) {
    var button = document.createElement('button');
    button.className = 'planet-button';
    button.id = "button-".concat(planet.id);
    button.textContent = planet.name;
    // Đặt vị trí cho nút
    button.style.position = 'absolute';
    button.style.top = '480px'; // Bạn có thể điều chỉnh vị trí này
    button.style.left = "".concat(Math.random() * 1000, "px"); // Tạo vị trí ngẫu nhiên cho nút
    button.onclick = function () { return showPlanetInfo(planet); };
    return button;
}
function showPlanetInfo(planet) {
    var infoDiv = document.getElementById('planet-info');
    infoDiv.innerHTML = "\n    <h2>".concat(planet.name, "</h2>\n    <p>").concat(planet.description, "</p>\n  ");
    // Cuộn đến vị trí của phần tử mô tả hành tinh
    var descriptionDiv = document.getElementById(planet.id);
    if (descriptionDiv) {
        descriptionDiv.scrollIntoView({ behavior: 'smooth' });
    }
}
function setupSolarSystem() {
    return __awaiter(this, void 0, void 0, function () {
        var planets, buttonsContainer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPlanets()];
                case 1:
                    planets = _a.sent();
                    buttonsContainer = document.getElementById('planet-buttons');
                    planets.forEach(function (planet) {
                        var button = createPlanetButton(planet);
                        buttonsContainer.appendChild(button);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
setupSolarSystem();
