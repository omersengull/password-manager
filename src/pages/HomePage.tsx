import { useState, useEffect } from "react";
import type { PasswordEntry } from "../interfaces/password";
import toast from "react-hot-toast";

import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";
import { ShieldCheck } from "lucide-react";
function Home() {
  const [passwords, setPasswords] = useState<PasswordEntry[]>(() => {
    const saved = localStorage.getItem("myVault");
    return saved ? JSON.parse(saved) : [];
  });
  const [formData, setFormData] = useState({
    siteName: "",
    userName: "",
    passwordValue: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("myVault", JSON.stringify(passwords));
  }, [passwords]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.siteName || !formData.userName) return;
    if (editingId) {
      setPasswords(
        passwords.map((p) => (p.id === editingId ? { ...p, ...formData } : p)),
      );
      setEditingId(null);
      toast.success("Şifre başarıyla değiştirildi!");
    } else {
      const newEntry: PasswordEntry = {
        id: crypto.randomUUID(),
        ...formData,
        isVisible: false,
      };
      setPasswords([...passwords, newEntry]);
      toast.success("Şifre başarıyla eklendi!");
    }
    setFormData({ siteName: "", userName: "", passwordValue: "" });
  };
  const deleteEntry = (id: string) => {
    setPasswords(passwords.filter((p) => p.id !== id));
    toast.success("Şifre başarıyla silindi!");
  };
  const toggleVisibility = (id: string) => {
    setPasswords(
      passwords.map((p) =>
        p.id === id ? { ...p, isVisible: !p.isVisible } : p,
      ),
    );
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-indigo-400 flex items-center gap-3">
          <ShieldCheck size={32} />
          Şifre Kasası
        </h1>

        <PasswordForm
          formData={formData}
          editingId={editingId}
          onSubmit={handleSubmit}
          onChange={(field, value) =>
            setFormData({ ...formData, [field]: value })
          }
        />

        <PasswordList
          passwords={passwords}
          onToggleVisibility={toggleVisibility}
          onDelete={deleteEntry}
          onEdit={(item) => {
            setEditingId(item.id);
            setFormData({
              siteName: item.siteName,
              userName: item.userName,
              passwordValue: item.passwordValue,
            });
          }}
        />
      </div>
    </div>
  );
}

export default Home;
