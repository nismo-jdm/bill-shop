import React, { useState, useEffect, useMemo, useRef } from "react";
import { Search, Plus, Minus, Trash2, PauseCircle, Printer, X, Package, Users, History, Settings as SettingsIcon, Store, AlertTriangle, Check, ChevronRight, Save, FileDown, Camera, Sun, Moon } from "lucide-react";

const uid = () => Math.random().toString(36).slice(2, 10);
const money = (n) => (Number(n) || 0).toFixed(2);
const todayStr = () => new Date().toISOString().slice(0, 10);

const DEFAULT_STATE = {
  settings: {
    businessName: "SwiftPOS",
    address: "",
    gstin: "",
    invoicePrefix: "INV-",
    nextInvoiceNumber: 1001,
    taxRates: [0, 5, 12, 18, 28],
    currency: "₹",
  },
  products: [
    { id: uid(), name: "Coca Cola", sku: "COKE-1", barcode: "8901001", category: "Beverages", unit: "pcs", costPrice: 30, price: 40, taxRate: 12, stock: 50, reorderLevel: 10 },
    { id: uid(), name: "Rice Bag", sku: "RICE-25KG", barcode: "8901002", category: "Groceries", unit: "pcs", costPrice: 1000, price: 1200, taxRate: 5, stock: 20, reorderLevel: 5 },
    { id: uid(), name: "Milk Packet", sku: "MILK-1L", barcode: "8901003", category: "Dairy", unit: "pcs", costPrice: 26, price: 32, taxRate: 0, stock: 80, reorderLevel: 20 },
    { id: uid(), name: "Chocolate", sku: "CHOC-BAR", barcode: "8901004", category: "Snacks", unit: "pcs", costPrice: 18, price: 25, taxRate: 12, stock: 100, reorderLevel: 25 },
  ],
  customers: [
    { id: uid(), name: "Walk-in Customer", phone: "", address: "", creditBalance: 0 },
    { id: uid(), name: "Rahul Nair", phone: "9876543210", address: "Tirur", creditBalance: 250 },
  ],
  invoices: [],
  heldBills: [],
};

const STORAGE_KEY = "pos-app-data-v2";

function useStorage() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const saveTimer = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get(STORAGE_KEY, false);
        setData(res ? JSON.parse(res.value) : DEFAULT_STATE);
      } catch (e) {
        setData(DEFAULT_STATE);
      }
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!loaded || !data) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      try {
        await window.storage.set(STORAGE_KEY, JSON.stringify(data), false);
      } catch (e) {
        console.error("save failed", e);
      }
    }, 400);
    return () => clearTimeout(saveTimer.current);
  }, [data, loaded]);

  return [data, setData, loaded];
}

const THEME_VARS = {
  dark: {
    "--bg": "#0B1220",
    "--panel": "#131B2E",
    "--panel-2": "#0F1729",
    "--border": "#232D42",
    "--text": "#E7ECF3",
    "--text-muted": "#8B96A8",
    "--input-bg": "#0F1729",
    "--sidebar": "#0B1220",
    "--sidebar-border": "#1B2436",
    "--hover": "#1A2338",
  },
  light: {
    "--bg": "#F3F4F8",
    "--panel": "#FFFFFF",
    "--panel-2": "#F8F9FC",
    "--border": "#E1E4EC",
    "--text": "#1B2130",
    "--text-muted": "#727C8E",
    "--input-bg": "#FFFFFF",
    "--sidebar": "#12172A",
    "--sidebar-border": "#232D42",
    "--hover": "#EEF0F6",
  },
};

const NAV = [
  { id: "billing", label: "Billing", icon: Store },
  { id: "inventory", label: "Products", icon: Package },
  { id: "reports", label: "Sales History", icon: History },
  { id: "customers", label: "Customers", icon: Users },
  { id: "settings", label: "Settings", icon: SettingsIcon },
];

export default function App() {
  const [data, setData, loaded] = useStorage();
  const [tab, setTab] = useState("billing");
  const [theme, setTheme] = useState("dark");

  const vars = THEME_VARS[theme];

  if (!loaded || !data) {
    return (
      <div style={{ ...vars, background: "var(--bg)", color: "var(--text)", fontFamily: "'IBM Plex Mono', monospace" }} className="min-h-screen flex items-center justify-center">
        Loading counter…
      </div>
    );
  }

  return (
    <div style={{ ...vars, background: "var(--bg)", color: "var(--text)" }} className="min-h-screen w-full flex">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .mono { font-family: 'IBM Plex Mono', monospace; }
        .disp { font-family: 'Space Grotesk', sans-serif; }
        * { font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
        button:focus-visible, input:focus-visible, select:focus-visible { outline: 2px solid #7C5CFC; outline-offset: 1px; }
        .grad-primary { background: linear-gradient(90deg, #7C5CFC 0%, #3B9DF5 100%); }
        .grad-primary:hover { filter: brightness(1.08); }
        .panel { background: var(--panel); border: 1px solid var(--border); }
        .input { background: var(--input-bg); border: 1px solid var(--border); color: var(--text); }
        .input::placeholder { color: var(--text-muted); }
        .muted { color: var(--text-muted); }
      `}</style>

      {/* Sidebar */}
      <aside style={{ background: "var(--sidebar)", borderRight: "1px solid var(--sidebar-border)" }} className="w-[210px] shrink-0 flex flex-col text-[#DCE3EA]">
        <div className="px-5 py-5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg grad-primary flex items-center justify-center shrink-0">
            <Store size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg disp">{data.settings.businessName || "SwiftPOS"}</span>
        </div>
        <nav className="flex-1 px-3 py-2 space-y-1">
          {NAV.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active ? "grad-primary text-white shadow-lg" : "text-[#8B96A8] hover:bg-white/5"
                }`}
              >
                <Icon size={17} />
                {t.label}
              </button>
            );
          })}
        </nav>
        <div className="p-3">
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium text-white grad-primary"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} Toggle Theme
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 flex flex-col">
        <Header data={data} tab={tab} />
        <div className="flex-1 overflow-auto">
          {tab === "billing" && <Billing data={data} setData={setData} />}
          {tab === "inventory" && <Inventory data={data} setData={setData} />}
          {tab === "customers" && <Customers data={data} setData={setData} />}
          {tab === "reports" && <Reports data={data} />}
          {tab === "settings" && <SettingsView data={data} setData={setData} />}
        </div>
      </main>
    </div>
  );
}

function Header({ data, tab }) {
  const titles = {
    billing: ["Retail Billing System", "Professional POS Billing Software"],
    inventory: ["Products", "Manage your inventory and stock levels"],
    customers: ["Customers", "Track customers and credit balances"],
    reports: ["Sales History", "Review invoices and business performance"],
    settings: ["Settings", "Configure your business and tax profile"],
  };
  const [title, subtitle] = titles[tab] || titles.billing;
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }} className="px-8 py-5 flex items-center justify-between gap-6">
      <div>
        <h1 className="text-2xl font-bold disp">{title}</h1>
        <p className="muted text-sm mt-0.5">{subtitle}</p>
      </div>
      <div className="relative w-72 shrink-0 hidden md:block">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 muted" />
        <input placeholder="Search products..." className="input w-full pl-9 pr-3 py-2.5 rounded-xl text-sm" />
      </div>
    </div>
  );
}

/* ---------------- BILLING ---------------- */
function Billing({ data, setData }) {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [customerId, setCustomerId] = useState(data.customers[0]?.id || "");
  const [discountAmt, setDiscountAmt] = useState(0);
  const [payMethod, setPayMethod] = useState("Cash");
  const [showReceipt, setShowReceipt] = useState(null);
  const [showHeld, setShowHeld] = useState(false);
  const invoiceNoPreview = `${data.settings.invoicePrefix}${data.settings.nextInvoiceNumber}`;

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data.products;
    return data.products.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.barcode.includes(q));
  }, [query, data.products]);

  function addToCart(p) {
    setCart((c) => {
      const existing = c.find((i) => i.productId === p.id);
      if (existing) return c.map((i) => (i.productId === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { productId: p.id, name: p.name, price: p.price, qty: 1, taxRate: p.taxRate }];
    });
  }
  function setQty(productId, qty) {
    if (qty <= 0) return removeLine(productId);
    setCart((c) => c.map((i) => (i.productId === productId ? { ...i, qty } : i)));
  }
  function removeLine(productId) {
    setCart((c) => c.filter((i) => i.productId !== productId));
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const avgTaxRate = data.settings.taxRates.includes(5) ? 5 : data.settings.taxRates[0] || 0;
  const gstTotal = cart.reduce((s, i) => s + (i.price * i.qty * (i.taxRate || 0)) / 100, 0);
  const grandTotal = Math.max(0, subtotal + gstTotal - (Number(discountAmt) || 0));

  function resetSale() {
    setCart([]);
    setDiscountAmt(0);
    setQuery("");
  }

  function holdBill() {
    if (cart.length === 0) return;
    setData((d) => ({ ...d, heldBills: [...d.heldBills, { id: uid(), cart, discountAmt, customerId, savedAt: new Date().toISOString() }] }));
    resetSale();
  }
  function resumeBill(h) {
    setCart(h.cart);
    setDiscountAmt(h.discountAmt || 0);
    setCustomerId(h.customerId);
    setData((d) => ({ ...d, heldBills: d.heldBills.filter((x) => x.id !== h.id) }));
    setShowHeld(false);
  }

  function buildInvoice() {
    return {
      id: uid(),
      invoiceNo: invoiceNoPreview,
      date: new Date().toISOString(),
      customerId,
      items: cart,
      subtotal,
      discount: Number(discountAmt) || 0,
      taxTotal: gstTotal,
      total: grandTotal,
      payments: [{ method: payMethod, amount: grandTotal }],
      status: "completed",
    };
  }

  function commitInvoice(invoice) {
    setData((d) => ({
      ...d,
      invoices: [...d.invoices, invoice],
      products: d.products.map((p) => {
        const line = cart.find((c) => c.productId === p.id);
        return line ? { ...p, stock: Math.max(0, p.stock - line.qty) } : p;
      }),
      settings: { ...d.settings, nextInvoiceNumber: d.settings.nextInvoiceNumber + 1 },
    }));
  }

  function saveBill() {
    if (cart.length === 0) return;
    const invoice = buildInvoice();
    commitInvoice(invoice);
    resetSale();
  }
  function printBill() {
    if (cart.length === 0) return;
    const invoice = buildInvoice();
    commitInvoice(invoice);
    setShowReceipt(invoice);
    resetSale();
  }
  function exportPdf() {
    printBill();
  }

  const customer = data.customers.find((c) => c.id === customerId);

  return (
    <div className="p-6 grid grid-cols-1 xl:grid-cols-[1fr_460px] gap-6 items-start">
      {/* Left: scanner + product grid */}
      <div className="panel rounded-2xl p-6">
        <h2 className="text-lg font-bold disp mb-4">Barcode Scanner</h2>
        <div className="flex gap-3 mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filteredProducts[0]) addToCart(filteredProducts[0]);
            }}
            placeholder="Scan barcode here..."
            className="input flex-1 px-4 py-3 rounded-xl text-sm"
          />
          <button className="grad-primary text-white px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2 shrink-0">
            <Camera size={16} /> Camera Scan
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((p) => (
            <button
              key={p.id}
              onClick={() => addToCart(p)}
              style={{ background: "var(--panel-2)", border: "1px solid var(--border)" }}
              className="text-left rounded-xl p-4 hover:border-[#7C5CFC] transition-colors"
            >
              <div className="font-semibold disp mb-1">{p.name}</div>
              <div className="disp font-bold text-lg mb-1">{data.settings.currency}{money(p.price)}</div>
              <div className="muted text-xs">{p.category}</div>
              <div className={`text-xs mt-0.5 ${p.stock <= p.reorderLevel ? "text-amber-400 font-medium" : "muted"}`}>Stock: {p.stock}</div>
            </button>
          ))}
          {filteredProducts.length === 0 && <div className="muted text-sm col-span-full py-8 text-center">No products match your search.</div>}
        </div>
      </div>

      {/* Right: current bill */}
      <div className="panel rounded-2xl p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold disp">Current Bill</h2>
          <div className="flex items-center gap-2">
            <span className="muted text-xs">Invoice #{invoiceNoPreview}</span>
            <button onClick={() => setShowHeld(true)} title="Held bills" className="relative p-1.5 rounded-lg hover:bg-white/5">
              <PauseCircle size={16} className="muted" />
              {data.heldBills.length > 0 && <span className="absolute -top-1 -right-1 bg-[#7C5CFC] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">{data.heldBills.length}</span>}
            </button>
          </div>
        </div>

        <div className="mb-3">
          <select value={customerId} onChange={(e) => setCustomerId(e.target.value)} className="input w-full px-3 py-2 rounded-xl text-sm">
            {data.customers.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        {cart.length === 0 ? (
          <div className="muted text-sm text-center py-12">No items yet — click a product to add it.</div>
        ) : (
          <div className="mb-4">
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 muted text-xs uppercase tracking-wide pb-2 mb-1" style={{ borderBottom: "1px solid var(--border)" }}>
              <span>Product</span><span>Qty</span><span className="text-right">Price</span><span className="text-right pr-6">Total</span>
            </div>
            <div className="space-y-2 max-h-[320px] overflow-auto pr-1">
              {cart.map((i) => (
                <div key={i.productId} className="grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center text-sm py-1">
                  <span className="font-medium truncate">{i.name}</span>
                  <span className="flex items-center gap-1.5">
                    <button onClick={() => setQty(i.productId, i.qty - 1)} className="w-6 h-6 rounded-full grad-primary text-white flex items-center justify-center text-xs">
                      <Minus size={12} />
                    </button>
                    <span className="w-4 text-center mono">{i.qty}</span>
                    <button onClick={() => setQty(i.productId, i.qty + 1)} className="w-6 h-6 rounded-full grad-primary text-white flex items-center justify-center text-xs">
                      <Plus size={12} />
                    </button>
                  </span>
                  <span className="mono text-right">{data.settings.currency}{money(i.price)}</span>
                  <span className="flex items-center justify-end gap-2">
                    <span className="mono font-semibold">{data.settings.currency}{money(i.price * i.qty)}</span>
                    <button onClick={() => removeLine(i.productId)} className="w-6 h-6 rounded-lg bg-red-500/90 hover:bg-red-500 text-white flex items-center justify-center text-xs">
                      <X size={12} />
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ borderTop: "1px solid var(--border)" }} className="pt-4 space-y-2 text-sm mono">
          <div className="flex justify-between"><span className="muted">Subtotal</span><span>{data.settings.currency}{money(subtotal)}</span></div>
          <div className="flex justify-between"><span className="muted">GST</span><span>{data.settings.currency}{money(gstTotal)}</span></div>
          <div className="flex items-center justify-between">
            <span className="muted">Discount</span>
            <input
              value={discountAmt}
              onChange={(e) => setDiscountAmt(Number(e.target.value) || 0)}
              className="input w-24 text-right px-2 py-1.5 rounded-lg"
            />
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)" }} className="pt-4 mt-3 flex items-center justify-between">
          <span className="text-lg font-bold disp">Grand Total</span>
          <span className="text-2xl font-bold disp">{data.settings.currency}{money(grandTotal)}</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-5">
          <button onClick={saveBill} disabled={cart.length === 0} className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium disabled:opacity-40">
            <Save size={15} /> Save Bill
          </button>
          <button onClick={printBill} disabled={cart.length === 0} className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium disabled:opacity-40">
            <Printer size={15} /> Print
          </button>
          <button onClick={exportPdf} disabled={cart.length === 0} className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium disabled:opacity-40">
            <FileDown size={15} /> Export PDF
          </button>
          <button onClick={resetSale} disabled={cart.length === 0} className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-medium disabled:opacity-40">
            <Trash2 size={15} /> Clear
          </button>
        </div>
        <button onClick={holdBill} disabled={cart.length === 0} className="mt-2.5 w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium disabled:opacity-40" style={{ background: "var(--panel-2)", border: "1px solid var(--border)" }}>
          <PauseCircle size={15} /> Hold Bill
        </button>
      </div>

      {showHeld && <HeldBillsModal held={data.heldBills} onResume={resumeBill} onClose={() => setShowHeld(false)} currency={data.settings.currency} />}
      {showReceipt && <ReceiptModal invoice={showReceipt} settings={data.settings} customer={customer} onClose={() => setShowReceipt(null)} />}
    </div>
  );
}

function HeldBillsModal({ held, onResume, onClose, currency }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="panel rounded-2xl w-full max-w-md max-h-[80vh] overflow-auto p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold disp text-lg">Held Bills</h3>
          <button onClick={onClose}><X size={18} /></button>
        </div>
        {held.length === 0 && <div className="muted text-sm py-6 text-center">No held bills.</div>}
        {held.map((h) => {
          const total = h.cart.reduce((s, i) => s + i.price * i.qty, 0);
          return (
            <button key={h.id} onClick={() => onResume(h)} style={{ border: "1px solid var(--border)" }} className="w-full flex items-center justify-between px-3 py-3 rounded-xl mb-2 hover:bg-white/5 text-left">
              <div>
                <div className="text-sm font-medium">{h.cart.length} item(s)</div>
                <div className="muted text-xs">{new Date(h.savedAt).toLocaleTimeString()}</div>
              </div>
              <div className="flex items-center gap-2 mono font-semibold">{currency}{money(total)} <ChevronRight size={14} /></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReceiptModal({ invoice, settings, customer, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#F0F4F5] p-3 rounded-2xl">
        <div className="bg-white w-[320px] p-6 mono text-[13px] text-[#2A2E33] leading-tight">
          <div className="mb-3">
            <div className="text-lg font-semibold disp">Order</div>
            <div className="text-lg disp">Receipt #{invoice.invoiceNo}</div>
          </div>
          <div className="text-[#5A6B7A] mb-3">
            <div>{settings.businessName}</div>
            {settings.gstin && <div>GSTIN {settings.gstin}</div>}
            <div>{new Date(invoice.date).toLocaleDateString()} {new Date(invoice.date).toLocaleTimeString()}</div>
            {settings.address && <div>{settings.address}</div>}
          </div>
          <div className="border-t border-dashed border-[#C9CFD3] my-3" />
          <div className="text-[#5A6B7A] mb-3 space-y-0.5">
            <div className="flex"><span className="w-24">Client</span><span>: {customer?.name || "Walk-in"}</span></div>
            <div className="flex"><span className="w-24">Invoice No</span><span>: {invoice.invoiceNo}</span></div>
            {customer?.phone && <div className="flex"><span className="w-24">Phone</span><span>: {customer.phone}</span></div>}
          </div>
          <div className="border-t border-dashed border-[#C9CFD3] my-3" />
          <div className="flex text-[#5A6B7A] text-[11px] uppercase tracking-wide mb-1">
            <span className="w-10">Qty</span><span className="flex-1">Description</span><span className="w-16 text-right">Cost</span>
          </div>
          <div className="border-t border-dashed border-[#C9CFD3] mb-1.5" />
          {invoice.items.map((i) => {
            const lineBase = i.price * i.qty;
            const gstAmt = (lineBase * (i.taxRate || 0)) / 100;
            return (
              <div key={i.productId} className="flex py-0.5">
                <span className="w-10">{i.qty}</span>
                <span className="flex-1 pr-2 truncate">{i.name}</span>
                <span className="w-16 text-right">{settings.currency}{money(lineBase + gstAmt)}</span>
              </div>
            );
          })}
          <div className="border-t border-dashed border-[#C9CFD3] my-3" />
          <div className="space-y-0.5">
            <div className="flex justify-end gap-6"><span className="text-[#5A6B7A]">Sub Total</span><span className="w-16 text-right">{money(invoice.subtotal)}</span></div>
            {invoice.discount > 0 && <div className="flex justify-end gap-6"><span className="text-[#5A6B7A]">Discount</span><span className="w-16 text-right">-{money(invoice.discount)}</span></div>}
            <div className="flex justify-end gap-6"><span className="text-[#5A6B7A]">GST</span><span className="w-16 text-right">{money(invoice.taxTotal)}</span></div>
            <div className="flex justify-end gap-6 font-semibold text-[15px] pt-1"><span>Order Total</span><span className="w-16 text-right">{settings.currency}{money(invoice.total)}</span></div>
          </div>
          <div className="text-[#5A6B7A] mt-2 space-y-0.5">
            {invoice.payments.map((p, idx) => (
              <div key={idx} className="flex justify-end gap-6"><span>{p.method}</span><span className="w-16 text-right">{settings.currency}{money(p.amount)}</span></div>
            ))}
          </div>
          <div className="text-center text-[#C9CFD3] tracking-widest my-4 text-[11px]">* * * * * * * * * * * * * * * * * * *</div>
          <div className="text-center font-semibold tracking-wide mb-4 disp">THANK YOU!</div>
          <div className="text-center text-[#5A6B7A] leading-relaxed mb-4">JOIN OUR E-MAIL<br />LIST FOR SPECIAL<br />OFFERS AND DISCOUNTS</div>
          <div className="text-[#5A6B7A] space-y-3 mb-1">
            <div className="border-b border-[#C9CFD3] pb-1">E-MAIL</div>
            <div className="border-b border-[#C9CFD3] pb-1">GUEST NAME</div>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button onClick={() => window.print()} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#D9D2C3] bg-white text-sm hover:bg-[#F0EEE6]">
            <Printer size={15} /> Print
          </button>
          <button onClick={onClose} className="flex-1 px-3 py-2.5 rounded-xl grad-primary text-white text-sm font-medium">New Sale</button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- INVENTORY ---------------- */
function Inventory({ data, setData }) {
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);
  const filtered = data.products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.sku.toLowerCase().includes(query.toLowerCase()));

  function save(product) {
    setData((d) => {
      const exists = d.products.some((p) => p.id === product.id);
      return { ...d, products: exists ? d.products.map((p) => (p.id === product.id ? product : p)) : [...d.products, product] };
    });
    setEditing(null);
  }
  function remove(id) {
    setData((d) => ({ ...d, products: d.products.filter((p) => p.id !== id) }));
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products…" className="input w-full max-w-sm px-3 py-2.5 rounded-xl text-sm" />
        <button onClick={() => setEditing({ id: uid(), name: "", sku: "", barcode: "", category: "", unit: "pcs", costPrice: 0, price: 0, taxRate: 0, stock: 0, reorderLevel: 5 })} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl grad-primary text-white text-sm font-medium">
          <Plus size={16} /> Add Product
        </button>
      </div>
      <div className="panel rounded-2xl overflow-auto">
        <table className="w-full text-sm">
          <thead style={{ borderBottom: "1px solid var(--border)" }} className="muted text-xs uppercase tracking-wide">
            <tr>
              <th className="text-left px-4 py-3">Name</th><th className="text-left px-2 py-3">SKU</th><th className="text-left px-2 py-3">Category</th>
              <th className="text-right px-2 py-3">Cost</th><th className="text-right px-2 py-3">Price</th><th className="text-right px-2 py-3">GST%</th><th className="text-right px-2 py-3">Stock</th><th className="w-24"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} style={{ borderTop: "1px solid var(--border)" }}>
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-2 py-3 mono muted">{p.sku}</td>
                <td className="px-2 py-3">{p.category}</td>
                <td className="px-2 py-3 text-right mono">{money(p.costPrice)}</td>
                <td className="px-2 py-3 text-right mono">{money(p.price)}</td>
                <td className="px-2 py-3 text-right mono">{p.taxRate}%</td>
                <td className="px-2 py-3 text-right mono">
                  <span className={p.stock <= p.reorderLevel ? "text-amber-400 font-semibold flex items-center justify-end gap-1" : ""}>
                    {p.stock <= p.reorderLevel && <AlertTriangle size={12} />} {p.stock}
                  </span>
                </td>
                <td className="px-2 py-3 text-right">
                  <button onClick={() => setEditing(p)} className="text-[#7C9CFC] text-xs font-medium mr-2 hover:underline">Edit</button>
                  <button onClick={() => remove(p.id)} className="text-red-400 text-xs font-medium hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editing && <ProductModal product={editing} onSave={save} onClose={() => setEditing(null)} taxRates={data.settings.taxRates} />}
    </div>
  );
}

function ProductModal({ product, onSave, onClose, taxRates }) {
  const [p, setP] = useState(product);
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="panel rounded-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold disp text-lg">{product.name ? "Edit Product" : "Add Product"}</h3>
          <button onClick={onClose}><X size={18} /></button>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Field label="Name" full><input value={p.name} onChange={(e) => setP({ ...p, name: e.target.value })} className="in" /></Field>
          <Field label="SKU"><input value={p.sku} onChange={(e) => setP({ ...p, sku: e.target.value })} className="in" /></Field>
          <Field label="Barcode"><input value={p.barcode} onChange={(e) => setP({ ...p, barcode: e.target.value })} className="in" /></Field>
          <Field label="Category"><input value={p.category} onChange={(e) => setP({ ...p, category: e.target.value })} className="in" /></Field>
          <Field label="Unit"><input value={p.unit} onChange={(e) => setP({ ...p, unit: e.target.value })} className="in" /></Field>
          <Field label="Cost Price"><input type="number" value={p.costPrice} onChange={(e) => setP({ ...p, costPrice: Number(e.target.value) })} className="in" /></Field>
          <Field label="Selling Price"><input type="number" value={p.price} onChange={(e) => setP({ ...p, price: Number(e.target.value) })} className="in" /></Field>
          <Field label="GST Rate %">
            <select value={p.taxRate} onChange={(e) => setP({ ...p, taxRate: Number(e.target.value) })} className="in">
              {taxRates.map((r) => <option key={r} value={r}>{r}%</option>)}
            </select>
          </Field>
          <Field label="Stock"><input type="number" value={p.stock} onChange={(e) => setP({ ...p, stock: Number(e.target.value) })} className="in" /></Field>
          <Field label="Reorder Level"><input type="number" value={p.reorderLevel} onChange={(e) => setP({ ...p, reorderLevel: Number(e.target.value) })} className="in" /></Field>
        </div>
        <style>{`.in { width: 100%; padding: 0.55rem 0.75rem; background: var(--input-bg); border: 1px solid var(--border); color: var(--text); border-radius: 0.65rem; margin-top: 0.25rem; }`}</style>
        <button onClick={() => onSave(p)} disabled={!p.name} className="w-full mt-5 px-4 py-3 rounded-xl grad-primary text-white text-sm font-semibold disabled:opacity-40">Save Product</button>
      </div>
    </div>
  );
}

function Field({ label, children, full }) {
  return (
    <label className={`block ${full ? "col-span-2" : ""}`}>
      <span className="muted text-xs uppercase tracking-wide">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- CUSTOMERS ---------------- */
function Customers({ data, setData }) {
  const [editing, setEditing] = useState(null);
  function save(c) {
    setData((d) => {
      const exists = d.customers.some((x) => x.id === c.id);
      return { ...d, customers: exists ? d.customers.map((x) => (x.id === c.id ? c : x)) : [...d.customers, c] };
    });
    setEditing(null);
  }
  function remove(id) {
    setData((d) => ({ ...d, customers: d.customers.filter((c) => c.id !== id) }));
  }
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold disp">Customers</h2>
        <button onClick={() => setEditing({ id: uid(), name: "", phone: "", address: "", creditBalance: 0 })} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl grad-primary text-white text-sm font-medium">
          <Plus size={16} /> Add Customer
        </button>
      </div>
      <div className="panel rounded-2xl overflow-auto">
        <table className="w-full text-sm">
          <thead style={{ borderBottom: "1px solid var(--border)" }} className="muted text-xs uppercase tracking-wide">
            <tr><th className="text-left px-4 py-3">Name</th><th className="text-left px-2 py-3">Phone</th><th className="text-left px-2 py-3">Address</th><th className="text-right px-2 py-3">Credit Due</th><th className="text-right px-2 py-3">Purchases</th><th className="w-20"></th></tr>
          </thead>
          <tbody>
            {data.customers.map((c) => {
              const purchaseCount = data.invoices.filter((i) => i.customerId === c.id).length;
              return (
                <tr key={c.id} style={{ borderTop: "1px solid var(--border)" }}>
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-2 py-3 mono">{c.phone}</td>
                  <td className="px-2 py-3">{c.address}</td>
                  <td className="px-2 py-3 text-right mono">{c.creditBalance > 0 ? <span className="text-amber-400 font-semibold">₹{money(c.creditBalance)}</span> : "—"}</td>
                  <td className="px-2 py-3 text-right mono">{purchaseCount}</td>
                  <td className="px-2 py-3 text-right">
                    <button onClick={() => setEditing(c)} className="text-[#7C9CFC] text-xs font-medium mr-2 hover:underline">Edit</button>
                    <button onClick={() => remove(c.id)} className="text-red-400 text-xs font-medium hover:underline">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {editing && <CustomerModal customer={editing} onSave={save} onClose={() => setEditing(null)} />}
    </div>
  );
}

function CustomerModal({ customer, onSave, onClose }) {
  const [c, setC] = useState(customer);
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="panel rounded-2xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold disp text-lg">{customer.name ? "Edit Customer" : "Add Customer"}</h3>
          <button onClick={onClose}><X size={18} /></button>
        </div>
        <div className="space-y-3 text-sm">
          <Field label="Name"><input value={c.name} onChange={(e) => setC({ ...c, name: e.target.value })} className="in" /></Field>
          <Field label="Phone"><input value={c.phone} onChange={(e) => setC({ ...c, phone: e.target.value })} className="in" /></Field>
          <Field label="Address"><input value={c.address} onChange={(e) => setC({ ...c, address: e.target.value })} className="in" /></Field>
          <Field label="Credit Balance Due"><input type="number" value={c.creditBalance} onChange={(e) => setC({ ...c, creditBalance: Number(e.target.value) })} className="in" /></Field>
        </div>
        <style>{`.in { width: 100%; padding: 0.55rem 0.75rem; background: var(--input-bg); border: 1px solid var(--border); color: var(--text); border-radius: 0.65rem; margin-top: 0.25rem; }`}</style>
        <button onClick={() => onSave(c)} disabled={!c.name} className="w-full mt-5 px-4 py-3 rounded-xl grad-primary text-white text-sm font-semibold disabled:opacity-40">Save Customer</button>
      </div>
    </div>
  );
}

/* ---------------- REPORTS ---------------- */
function Reports({ data }) {
  const today = todayStr();
  const todayInvoices = data.invoices.filter((i) => i.date.slice(0, 10) === today);
  const totalSalesToday = todayInvoices.reduce((s, i) => s + i.total, 0);
  const totalSalesAll = data.invoices.reduce((s, i) => s + i.total, 0);
  const totalTax = data.invoices.reduce((s, i) => s + i.taxTotal, 0);
  const itemSales = {};
  data.invoices.forEach((inv) => inv.items.forEach((it) => { itemSales[it.name] = (itemSales[it.name] || 0) + it.qty; }));
  const topItems = Object.entries(itemSales).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const lowStock = data.products.filter((p) => p.stock <= p.reorderLevel);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Today's Sales" value={`₹${money(totalSalesToday)}`} sub={`${todayInvoices.length} bills`} />
        <StatCard label="Total Sales" value={`₹${money(totalSalesAll)}`} sub={`${data.invoices.length} bills`} />
        <StatCard label="Tax Collected" value={`₹${money(totalTax)}`} sub="all time" />
        <StatCard label="Low Stock Items" value={lowStock.length} sub="need reorder" warn={lowStock.length > 0} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="panel rounded-2xl p-4">
          <h3 className="font-semibold mb-3 text-sm disp">Top Selling Items</h3>
          {topItems.length === 0 && <div className="muted text-sm">No sales yet.</div>}
          {topItems.map(([name, qty]) => (
            <div key={name} style={{ borderBottom: "1px solid var(--border)" }} className="flex justify-between text-sm py-1.5 last:border-0">
              <span>{name}</span><span className="mono font-medium">{qty} sold</span>
            </div>
          ))}
        </div>
        <div className="panel rounded-2xl p-4">
          <h3 className="font-semibold mb-3 text-sm flex items-center gap-1.5 disp"><AlertTriangle size={14} className="text-amber-400" /> Low Stock Alerts</h3>
          {lowStock.length === 0 && <div className="muted text-sm">All stock levels healthy.</div>}
          {lowStock.map((p) => (
            <div key={p.id} style={{ borderBottom: "1px solid var(--border)" }} className="flex justify-between text-sm py-1.5 last:border-0">
              <span>{p.name}</span><span className="mono font-medium text-amber-400">{p.stock} left</span>
            </div>
          ))}
        </div>
      </div>
      <div className="panel rounded-2xl p-4 mt-6">
        <h3 className="font-semibold mb-3 text-sm disp">Recent Invoices</h3>
        <table className="w-full text-sm">
          <thead className="muted text-xs uppercase"><tr><th className="text-left py-1">Invoice</th><th className="text-left py-1">Date</th><th className="text-right py-1">Total</th></tr></thead>
          <tbody>
            {[...data.invoices].reverse().slice(0, 10).map((i) => (
              <tr key={i.id} style={{ borderTop: "1px solid var(--border)" }}>
                <td className="py-1.5 mono">{i.invoiceNo}</td>
                <td className="py-1.5 muted">{new Date(i.date).toLocaleString()}</td>
                <td className="py-1.5 text-right mono font-medium">₹{money(i.total)}</td>
              </tr>
            ))}
            {data.invoices.length === 0 && <tr><td colSpan={3} className="text-center py-4 muted">No invoices yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, warn }) {
  return (
    <div className="panel rounded-2xl p-4">
      <div className="muted text-xs uppercase tracking-wide">{label}</div>
      <div className={`text-2xl font-bold mono mt-1 ${warn ? "text-amber-400" : ""}`}>{value}</div>
      <div className="muted text-xs mt-0.5">{sub}</div>
    </div>
  );
}

/* ---------------- SETTINGS ---------------- */
function SettingsView({ data, setData }) {
  const [s, setS] = useState(data.settings);
  function save() { setData((d) => ({ ...d, settings: s })); }
  return (
    <div className="p-6 max-w-lg">
      <div className="panel rounded-2xl p-5 space-y-4 text-sm">
        <Field label="Business Name"><input value={s.businessName} onChange={(e) => setS({ ...s, businessName: e.target.value })} className="in" /></Field>
        <Field label="Address"><input value={s.address} onChange={(e) => setS({ ...s, address: e.target.value })} className="in" /></Field>
        <Field label="GSTIN / Tax ID"><input value={s.gstin} onChange={(e) => setS({ ...s, gstin: e.target.value })} className="in" /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Invoice Prefix"><input value={s.invoicePrefix} onChange={(e) => setS({ ...s, invoicePrefix: e.target.value })} className="in" /></Field>
          <Field label="Next Invoice #"><input type="number" value={s.nextInvoiceNumber} onChange={(e) => setS({ ...s, nextInvoiceNumber: Number(e.target.value) })} className="in" /></Field>
        </div>
        <Field label="Currency Symbol"><input value={s.currency} onChange={(e) => setS({ ...s, currency: e.target.value })} className="in" /></Field>
        <Field label="Tax Rate Slabs (comma-separated %)">
          <input value={s.taxRates.join(",")} onChange={(e) => setS({ ...s, taxRates: e.target.value.split(",").map((x) => Number(x.trim())).filter((x) => !isNaN(x)) })} className="in" />
        </Field>
      </div>
      <style>{`.in { width: 100%; padding: 0.55rem 0.75rem; background: var(--input-bg); border: 1px solid var(--border); color: var(--text); border-radius: 0.65rem; margin-top: 0.25rem; }`}</style>
      <button onClick={save} className="mt-5 px-5 py-3 rounded-xl grad-primary text-white text-sm font-semibold">Save Settings</button>
    </div>
  );
}
