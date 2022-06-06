/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import Controlador.AccionesUsuario;
import Modelo.MUsuario;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author ommyr
 */
public class guardarUsuarios extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String nom,appat,apmat,email,empresa,contra;
            int tel;
            
            nom = request.getParameter("nombre");
            appat= request.getParameter("regappat");
            apmat=request.getParameter("regapmat");
            email=request.getParameter("regcorreo");
            empresa=request.getParameter("regempresa");
            tel=Integer.parseInt(request.getParameter("regtel"));
            contra=request.getParameter("regcontra");
            
            MUsuario u = new MUsuario();
            
            u.setNombre(nom);
            u.setAppat(appat);
            u.setApmat(apmat);
            u.setCorreo(email);
            u.setEmpresa(empresa);
            u.setTel(tel);
            u.setContrasena(contra);
            
            
            //ejecuto la querry
            
            int estatus = AccionesUsuario.registroUsuario(u);
            
            if(estatus > 0){
                response.sendRedirect("index.html");
            }else{
                response.sendRedirect("error.jsp");
            }
          
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
