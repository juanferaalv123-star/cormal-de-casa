
document.addEventListener("DOMContentLoaded", () => {
  const configurator = document.getElementById("vipConfigurator");
  const openButton = document.getElementById("vipOpen");
  const saveButton = document.getElementById("vipSave");
  const clearButton = document.getElementById("vipClear");
  const summary = document.getElementById("vipSummary");
  const totalElement = document.getElementById("vipTotal");
  const message = document.getElementById("vipMessage");
  const orderList = document.getElementById("vipOrderList");
  const ordersPanel = document.getElementById("vipOrders");
  const storageKey = "comalVipPedidos";

  if (!configurator || !openButton) return;

  const money = value => new Intl.NumberFormat("es-CO", {
    style: "currency", currency: "COP", maximumFractionDigits: 0
  }).format(value);

  function selectedValue(group) {
    return document.querySelector(`input[name="${group}"]:checked`);
  }

  function getOrder() {
    const base = selectedValue("base");
    const protein = selectedValue("protein");
    const sauce = selectedValue("sauce");
    const extras = [...document.querySelectorAll('input[name="extra"]:checked')];

    const ingredients = [
      base?.value,
      protein?.value,
      ...extras.map(item => item.value),
      sauce?.value
    ].filter(Boolean);

    const total = [base, protein, sauce, ...extras]
      .reduce((sum, item) => sum + Number(item?.dataset.price || 0), 0);

    return {
      name: document.getElementById("vipName").value.trim(),
      ingredients,
      total
    };
  }

  function updatePreview() {
    const order = getOrder();
    summary.textContent = order.ingredients.join(" · ");
    totalElement.textContent = money(order.total);
  }

  function readOrders() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch {
      return [];
    }
  }

  function renderOrders() {
    const orders = readOrders();
    orderList.innerHTML = "";

    orders.forEach((order, index) => {
      const item = document.createElement("li");
      item.textContent = `${index + 1}. ${order.name} — ${order.ingredients.join(", ")} — ${money(order.total)}`;
      orderList.appendChild(item);
    });

    ordersPanel.hidden = orders.length === 0;
  }

  openButton.addEventListener("click", () => {
    configurator.hidden = !configurator.hidden;
    openButton.setAttribute("aria-expanded", String(!configurator.hidden));
    openButton.textContent = configurator.hidden ? "Crear mi plato" : "Cerrar configurador";
    if (!configurator.hidden) updatePreview();
  });

  configurator.addEventListener("change", updatePreview);

  saveButton.addEventListener("click", () => {
    const order = getOrder();

    if (!order.name) {
      message.textContent = "Escribe un nombre para identificar tu plato.";
      document.getElementById("vipName").focus();
      return;
    }

    const orders = readOrders();
    orders.push({ ...order, date: new Date().toISOString() });
    localStorage.setItem(storageKey, JSON.stringify(orders));

    message.textContent = "¡Pedido de prueba guardado en este navegador!";
    renderOrders();
  });

  clearButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    renderOrders();
    message.textContent = "Se borraron los pedidos guardados.";
  });

  updatePreview();
  renderOrders();
});
