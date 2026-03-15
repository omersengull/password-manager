import React from "react";
import { PlusCircle, Save } from "lucide-react";
interface PasswordFormProps {
  formData: { siteName: string; userName: string; passwordValue: string };
  editingId: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: string, value: string) => void;
}
const PasswordForm = ({
  formData,
  editingId,
  onSubmit,
  onChange,
}: PasswordFormProps) => {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="bg-slate-800 p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input
          className="bg-slate-700 p-2 rounded outline-none focus:ring-2 ring-indigo-500"
          placeholder="Site Adı"
          value={formData.siteName}
          onChange={(e) => onChange("siteName", e.target.value)}
        />
        <input
          className="bg-slate-700 p-2 rounded outline-none focus:ring-2 ring-indigo-500"
          placeholder="Kullanıcı Adı"
          value={formData.userName}
          onChange={(e) => onChange("userName", e.target.value)}
        />
        <input
          type="password"
          className="bg-slate-700 p-2 rounded outline-none focus:ring-2 ring-indigo-500"
          placeholder="Şifre"
          value={formData.passwordValue}
          onChange={(e) => onChange("passwordValue", e.target.value)}
        />
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-colors p-2 rounded-md w-full sm:w-auto px-4 py-2 font-bold">
          {editingId ? <Save size={20} /> : <PlusCircle size={20} />}
          {editingId ? "Güncelle" : "Ekle"}
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
