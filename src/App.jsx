import { useState } from "react";
import { faker } from "@faker-js/faker/locale/ru";

const makeProduct = (id) => ({
  id,
  // название на русском (если локаль поддерживает соответствующие значения)
  name: faker.commerce.productName(),
  // цена как число (до 2 знаков)
  price: Number(faker.commerce.price(10, 5000, 2)),
});

export default function App() {
  // при старте генерируем 8 случайных товаров
  const [items, setItems] = useState(() =>
      Array.from({ length: 8 }, (_, i) => makeProduct(i + 1))
  );
  // счётчик для присвоения уникального id новым товарам
  // после добавления товара увеличивается на 1 (чтобы не дублировать id)
  const [nextId, setNextId] = useState(items.length + 1);
  // id товара, который сейчас редактируется;
  // когда null — ни один товар не в режиме редактирования
  const [editingId, setEditingId] = useState(null);
  // временный объект с полями формы (name, price), используется при редактировании строки:
  // изменения в инпуте сохраняются в draft, а при сохранении применяются к items
  const [draft, setDraft] = useState({ name: "", price: "" });

  const addRandom = () => {
    const p = makeProduct(nextId);
    setItems((s) => [p, ...s]);
    setNextId((n) => n + 1);
  };

  const addCustom = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const price = parseFloat(e.target.price.value);
    if (!name || Number.isNaN(price)) return;
    const p = { id: nextId, name, price: Number(price.toFixed(2)) };
    setItems((s) => [p, ...s]);
    setNextId((n) => n + 1);
    e.target.reset();
  };

  const remove = (id) => setItems((s) => s.filter((x) => x.id !== id));

  const startEdit = (item) => {
    setEditingId(item.id);
    setDraft({ name: item.name, price: String(item.price) });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft({ name: "", price: "" });
  };

  const saveEdit = (id) => {
    const name = draft.name.trim();
    const price = parseFloat(draft.price);
    if (!name || Number.isNaN(price)) return;
    setItems((s) => s.map((it) => (it.id === id ? { ...it, name, price: Number(price.toFixed(2)) } : it)));
    cancelEdit();
  };

  return (
      <div style={{ maxWidth: 900, margin: "24px auto", fontFamily: "system-ui, sans-serif" }}>
        <h1>Список продуктов</h1>

        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <button onClick={addRandom}>Добавить случайный</button>
          <form onSubmit={addCustom} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input name="name" placeholder="Наименование" style={{ width: "280px" }} />
            <input name="price" placeholder="Цена" inputMode="decimal" style={{ width: "100px" }} />
            <button type="submit">Добавить</button>
          </form>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
          <tr>
            <th style={{ textAlign: "left", padding: 8 }}>ID</th>
            <th style={{ textAlign: "left", padding: 8 }}>Наименование</th>
            <th style={{ textAlign: "center", padding: 8 }}>Цена</th>
            <th style={{ padding: 8 }}>Действия</th>
          </tr>
          </thead>
          <tbody>
          {items.map((it) => (
              <tr key={it.id} style={{ borderTop: "1px solid #eee" }}>
                <td style={{ padding: 8 }}>{it.id}</td>

                <td style={{ padding: 8, minWidth: 240, textAlign: "left" }}>
                  {editingId === it.id ? (
                      <input
                          value={draft.name}
                          onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                          style={{ width: "100%" }}
                      />
                  ) : (
                      it.name
                  )}
                </td>

                <td style={{ padding: 8, width: 120 }}>
                  {editingId === it.id ? (
                      <input
                          value={draft.price}
                          onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))}
                          inputMode="decimal"
                          style={{ width: "100px" }}
                      />
                  ) : (
                      `${it.price.toFixed(2)} ₽`
                  )}
                </td>

                <td style={{ padding: 8 }}>
                  {editingId === it.id ? (
                      <>
                        <button onClick={() => saveEdit(it.id)} style={{ marginRight: 8 }}>Сохранить</button>
                        <button onClick={cancelEdit}>Отменить</button>
                      </>
                  ) : (
                      <>
                        <button onClick={() => startEdit(it)} style={{ marginRight: 8 }}>Изменить</button>
                        <button onClick={() => remove(it.id)}>Удалить</button>
                      </>
                  )}
                </td>
              </tr>
          ))}
          {items.length === 0 && (
              <tr><td colSpan={4} style={{ padding: 12 }}>Список пуст</td></tr>
          )}
          </tbody>
        </table>
      </div>
  );
}